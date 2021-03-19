import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Doctor, DoctorProfile, DoctorWork, DoctorContacts, DoctorSettings } from '../doctor.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-doctor-dialog',
  templateUrl: './doctor-sms.component.html',
  styleUrls: ['./doctor-sms.component.scss']
})
export class DoctorsmsComponent implements OnInit {

  public form: FormGroup;
  constructor(public dialogRef: MatDialogRef<DoctorsmsComponent>,
    @Inject(MAT_DIALOG_DATA) public doctor: Doctor, public snackBar: MatSnackBar) {
    this.form = new FormGroup({
      _id: new FormControl(''),
      userOwner: new FormControl(''),
      smsOwner: new FormControl(''),
      onModel: new FormControl(''),
      status: new FormControl(''),
      contacts: new FormGroup({
        phone: new FormControl(''),
        message: new FormControl(''),
        type: new FormControl(''),
      }),
    })
  }

  ngOnInit() {
    let token = localStorage.getItem('token');
    var decoded = jwt_decode(token);

    if (this.doctor) {
      this.form.patchValue(this.doctor);
      this.form.patchValue({
        smsOwner: this.doctor._id,
        onModel: 'Doctor',
        userOwner: JSON.parse(JSON.stringify(decoded))._id,
        status: "envoyé"

      });

    }
    else {
      this.doctor = new Doctor();
      this.doctor.contacts = new DoctorContacts();

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

