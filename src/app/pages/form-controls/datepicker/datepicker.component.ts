import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import jwt_decode from "../../../../../node_modules/jwt-decode";
import { CongeService } from 'src/app/services/conge.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  public settings: Settings;
  form = new FormGroup({
    nbreJours: new FormControl('',),
    dateDebut: new FormControl('', [Validators.required]),
    dateFin: new FormControl('', [Validators.required]),
    motif: new FormControl('', [Validators.required]),
    status: new FormControl('',),
    userOwner: new FormControl(''),
  });
  valid = true;
  validated = false;
  decoded: any;
  userId: any;
  soldeConge: any;
  token: string;
  constructor(public appSettings: AppSettings, public congeService: CongeService, public snackBar: MatSnackBar, public userservice:UsersService) {
    this.settings = this.appSettings.settings;
  }
  ngOnInit() {

    this.token = localStorage.getItem('token');
    this.decoded = jwt_decode(this.token);
    this.userId = this.decoded._id;
    this.userservice.getUser(this.userId).subscribe((res: any) => {
      this.soldeConge = JSON.parse(JSON.stringify(res.work.soldeConge));
    }
    );
    
    this.form = new FormGroup({
      nbreJours: new FormControl('',),
      dateDebut: new FormControl('', [Validators.required]),
      dateFin: new FormControl('', [Validators.required]),
      motif: new FormControl('', [Validators.required]),
      status: new FormControl('',),
      userOwner: new FormControl(''),
    });
  }
  //Datepicker start date
  startDate = new Date(1990, 0, 1);

  //Datepicker with min & max validation
  minDate = new Date(2010, 0, 1);
  maxDate = new Date(2020, 0, 1);

  //Datepicker with filter validation
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }

  //Datepicker input and change events
  events: string[] = [];
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  // select
  selectedValue: string;
  holidays = [
    { value: 'Public holiday', viewValue: 'Public holidays' },
    { value: 'Vacation days', viewValue: 'Vacation days' },
    { value: 'Sick days', viewValue: 'Sick days' },
    { value: 'Maternity', viewValue: 'Maternity' }
  ];


  //submit holidays request
  onFormSubmit() {
    let currentDate = new Date();
    let dateDebut = new Date(this.form.value.dateDebut);
    let dateFin = new Date(this.form.value.dateFin);
    let thirdDate = new Date();
    // différence des heures
    var time_diff = dateFin.getTime() - dateDebut.getTime();
    // différence de jours
    var days_Diff = time_diff / (1000 * 3600 * 24);
    let thirdDay = new Date(thirdDate.setDate(currentDate.getDate() + 2));

    if ((currentDate < dateDebut)
      && (dateDebut <= dateFin)
      && (thirdDay < dateDebut)
      && (this.soldeConge != 0)
      && (days_Diff <= this.soldeConge)) {
        this.validated = false;

      this.form.patchValue({
        nbreJours: days_Diff + 1,
        dateDebut: dateDebut,
        dateFin: dateFin,
        userOwner: JSON.parse(JSON.stringify(this.decoded))._id,
        status: JSON.parse(JSON.stringify(this.decoded)).roles[0].name,
      });
      this.congeService.addconge(this.form.value).subscribe(
        (val) => {
          let message = "your request has been sent successfully";
          let action = "close"
          this.snackBar.open(message, action, {
            duration: 2000,
          });
          this.ngOnInit()
        },
        () => {
          console.log("The POST observable is now completed.");
        });
    } else {
      this.validated = true;
      //document.getElementById('validated').style.display = 'block';
      let message = "please be sure that the end and start date are correct ";
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

  }
}
