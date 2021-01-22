import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Doctor, DoctorProfile, DoctorWork, DoctorContacts } from '../doctor.model';

@Component({
  selector: 'app-doctor-dialog',
  templateUrl: './doctor-dialog.component.html',
  styleUrls: ['./doctor-dialog.component.scss']
})
export class DoctorDialogComponent implements OnInit {

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
  constructor(public dialogRef: MatDialogRef<DoctorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: Doctor,
              public fb: FormBuilder) {
                this.form = new FormGroup({
                  _id:new FormControl(''),
                   profile: new FormGroup({
                     name: new FormControl(''),
                     surname: new FormControl(''), 
                     birthday:new FormControl(''),
                     image: new FormControl(''),
                   }),
                   work: new FormGroup({
                     postion:new FormControl(''),
                   }),
                   contacts: new FormGroup({
                     email: new FormControl(''),
                     phone: new FormControl(''),
                     address: new FormControl(''),
                   }),
                 })
  }

  ngOnInit() {
    if(this.user){
      this.form.setValue(this.user);
    } 
    else{
      this.user = new Doctor();
      this.user.profile = new DoctorProfile();
      this.user.work = new DoctorWork();
      this.user.contacts = new DoctorContacts();
    } 
  }

  close(): void {
    this.dialogRef.close();
  }

}

