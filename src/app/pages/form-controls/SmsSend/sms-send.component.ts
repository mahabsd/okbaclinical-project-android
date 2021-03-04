import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import jwt_decode from "jwt-decode";
import { SmsService } from 'src/app/services/sms.service';

@Component({
  selector: 'app-sms-send',
  templateUrl: './sms-send.component.html'
})
export class SmsSendComponent implements OnInit {

  public formSms: FormGroup;

  constructor(public smsService: SmsService, public snackBar: MatSnackBar) {
    this.formSms = new FormGroup({
      status: new FormControl(''),
      userOwner: new FormControl(''),
      contacts: new FormGroup({
        phone: new FormControl(''),
        message: new FormControl(''),
        type: new FormControl(''),
      }),
    })
  }

  ngOnInit() {
    this.formSms = new FormGroup({
      status: new FormControl(''),
      onModel: new FormControl(''),
      smsOwner: new FormControl(''),
      userOwner: new FormControl(''),
      contacts: new FormGroup({
        phone: new FormControl(''),
        message: new FormControl(''),
        type: new FormControl(''),
      }),

    })
  }
  // add sms
  onSubmit() {
    let token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    this.formSms.patchValue({
      userOwner: JSON.parse(JSON.stringify(decoded))._id,
      smsOwner: JSON.parse(JSON.stringify(decoded))._id,
      onModel: 'User',
      status: "envoyé"
      
    });
    console.log(this.formSms.value);
    
    this.smsService.addSms(this.formSms.value).subscribe(sms => {  
      console.log("POST call successful value returned in body", sms);
      let message = "sms added successfully";
      ///action va etre changé
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
      this.ngOnInit()
    },
    () => {
      console.log("The POST observable is now completed.");

    });
    
    this.smsService.SendSms(this.formSms.value.contacts.type, this.formSms.value.contacts.phone, this.formSms.value.contacts.message).subscribe(sms => {
      let message = "Sms added successfully";
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }

}