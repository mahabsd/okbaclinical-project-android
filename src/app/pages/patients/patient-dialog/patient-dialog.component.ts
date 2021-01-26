import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Patient, PatientProfile, PatientWork, PatientContacts, PatientSettings } from '../patient.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.scss']
})
export class PatientDialogComponent implements OnInit {

  public form:FormGroup;
  public passwordHide:boolean = true;
  public colors = [
    {value: 'gradient-purple', viewValue: 'Purple'},
    {value: 'gradient-indigo', viewValue: 'Indigo'},
    {value: 'gradient-teal', viewValue: 'Teal'},
    {value: 'gradient-blue', viewValue: 'Blue'},
    {value: 'gradient-orange', viewValue: 'Orange'},
    {value: 'gradient-green', viewValue: 'Green'},
    {value: 'gradient-pink', viewValue: 'Pink'},
    {value: 'gradient-red', viewValue: 'Red'},
    {value: 'gradient-amber', viewValue: 'Amber'},
    {value: 'gradient-gray', viewValue: 'Gray'},
    {value: 'gradient-brown', viewValue: 'Brown'},
    {value: 'gradient-lime', viewValue: 'Lime'}
  ];
  constructor(public dialogRef: MatDialogRef<PatientDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public patient: Patient, public snackBar: MatSnackBar) {
                this.form = new FormGroup({
                  _id: new FormControl(''),
                  cin: new FormControl('', [Validators.required, Validators.minLength(8)]),
                  dateDentre: new FormControl('', [Validators.required]),
                  service: new FormControl('', [Validators.required]),
                  description: new FormControl(''),
                   profile: new FormGroup({
                     name: new FormControl('', [Validators.required]),
                     surname: new FormControl('', [Validators.required]),
                     birthday:new FormControl(''),
                     image: new FormControl(''),
                   }),
                   work: new FormGroup({
                    position:new FormControl(''),
                   }),
                   contacts: new FormGroup({
                     email: new FormControl(''),
                     phone: new FormControl(''),
                     address: new FormControl(''),
                   }),
                   settings: new FormGroup({
                     // isActive: new FormControl(''),
                     // isDeleted: new FormControl(''),
                       bgColor: new FormControl(''),
                    })
                 })
  }

  ngOnInit() {
    if(this.patient){
      this.form.patchValue(this.patient);
    } 
    else{
      this.patient = new Patient();
      this.patient.profile = new PatientProfile();
      this.patient.work = new PatientWork();
      this.patient.contacts = new PatientContacts();
      this.patient.settings = new PatientSettings();

    } 
  }
  openSnackBarAdd() {
    let message = "Patient added successfully";
    let action = "Annuler"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  openSnackBarUpdate() {
    let message = "Patient updated successfully"
let action = "Annuler"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  close(): void {
    this.dialogRef.close();
  }

}

