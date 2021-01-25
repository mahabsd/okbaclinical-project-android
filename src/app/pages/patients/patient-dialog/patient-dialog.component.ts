import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Patient, PatientProfile, PatientWork, PatientContacts, PatientSettings } from '../patient.model';


@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.scss']
})
export class PatientDialogComponent implements OnInit {

  public form:FormGroup;
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
              @Inject(MAT_DIALOG_DATA) public patient: Patient) {
                this.form = new FormGroup({
                  // _id:new FormControl(''),
                   cin: new FormControl('', [Validators.required, Validators.minLength(8)]),
                   profile: new FormGroup({
                     name: new FormControl(''),
                     surname: new FormControl(''), 
                     birthday:new FormControl(''),
                     gender: new FormControl(''),
                     service: new FormControl(''),
                     descriptionAct: new FormControl(''),
                     image: new FormControl(''),
                    
                   }),
                   work: new FormGroup({
                     company:new FormControl(''),
                     position:new FormControl([]),
                  
                   }),
                   contacts: new FormGroup({
                     email: new FormControl('', [Validators.required]),
                     phone: new FormControl(''),
                     address: new FormControl(''),
                   }),
                  
                   settings: new FormGroup({
                    status: new FormControl(''),
                    dateEntree: new FormControl(''),
                    bgColor: new FormControl(''),
                   })
                 });
                }
              
                ngOnInit() {
                  if(this.patient){
                    this.form.setValue(this.patient);
                  } 
                  else{
                    this.patient = new Patient();
                    this.patient.profile = new PatientProfile();
                    this.patient.work = new PatientWork();
                    this.patient.contacts = new PatientContacts();
                    this.patient.settings = new PatientSettings();
                  } 
                }  

  close(): void {
    this.dialogRef.close();
  }

}
