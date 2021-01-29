import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import jwt_decode from "../../../../../node_modules/jwt-decode";
import { CongeService } from 'src/app/services/conge.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(public appSettings: AppSettings, public congeService: CongeService ,public snackBar: MatSnackBar) {
    this.settings = this.appSettings.settings;
  }
  ngOnInit() {

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
    let token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    let currentDate = new Date();
    let dateDebut = new Date(this.form.value.dateDebut);
    let dateFin = new Date(this.form.value.dateFin);
    let soldeConge = JSON.parse(JSON.stringify(decoded)).soldeConge
    let thirdDate = new Date();
    // différence des heures
    var time_diff = dateFin.getTime() - dateDebut.getTime();
    // différence de jours
    var days_Diff = time_diff / (1000 * 3600 * 24);
    let thirdDay = new Date(thirdDate.setDate(currentDate.getDate() + 2));

    if ((currentDate < dateDebut)
      && (dateDebut <= dateFin)
      && (thirdDay < dateDebut)
      && (soldeConge != 0)
      && (days_Diff <= soldeConge)) {
      this.form.patchValue({
        nbreJours: days_Diff + 1,
        dateDebut: dateDebut,
        dateFin: dateFin,
        userOwner: JSON.parse(JSON.stringify(decoded))._id,
        status: "pending"
      });
      this.congeService.addconge(this.form.value).subscribe(res =>
        console.log(res)
      )

      // return console.log(true);
    }


  }
}
