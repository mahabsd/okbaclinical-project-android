import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Patient, PatientProfile, PatientWork, PatientContacts, PatientSettings } from '../patient.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-sms.component.html',
  styleUrls: ['./patient-sms.component.scss']
})
export class PatientsmsComponent implements OnInit {

  public form:FormGroup;
  constructor(public dialogRef: MatDialogRef<PatientsmsComponent>,
              @Inject(MAT_DIALOG_DATA) public patient: Patient, public snackBar: MatSnackBar) {
                this.form = new FormGroup({
                  _id: new FormControl(''),
                  userOwner:new FormControl(''),
                  smsOwner:new FormControl(''),
                  status:new FormControl(''),
                   contacts: new FormGroup({
                     phone: new FormControl(''),
                     message: new FormControl(''),
                     type:new FormControl(''),

                   }),
                  
                 })
  }

  ngOnInit() {
    
    let token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    
      if(this.patient){
        this.form.patchValue(this.patient);
        this.form.patchValue({
          smsOwner:this.patient._id,
          userOwner: JSON.parse(JSON.stringify(decoded))._id,
          status: "envoyé"
        });      
      } 
      else{
        this.patient = new Patient();
        this.patient.contacts = new PatientContacts();
      }
  }
  openSnackBarAdd() {
    let message = "sms added successfully";
    let action = "Annuler"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  openSnackBarUpdate() {
    let message = "sms updated successfully"
let action = "Annuler"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  close(): void {
    this.dialogRef.close();
  }

}

