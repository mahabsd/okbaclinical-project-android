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
        type:new FormControl(''),

      }),
     
     

    })


   
  }

  ngOnInit() {
    this.formSms = new FormGroup({
      status: new FormControl(''),
      smsOwner: new FormControl(''),
      userOwner: new FormControl(''),
      contacts: new FormGroup({
        phone: new FormControl(''),
        message: new FormControl(''),
        type:new FormControl(''),

      }),
     
     

    })
  }
  // add maintenance
  onSubmit() {
    let token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    console.log(this.formSms);
    this.formSms.patchValue({
      userOwner: JSON.parse(JSON.stringify(decoded))._id,
      status: "envoyé"

    });
    console.log(this.formSms);
    this.smsService.addSms(this.formSms.value).subscribe(sms => {
      console.log("hello" + sms);

    });
    this.smsService.SendSms(this.formSms.value).subscribe(sms => {
      console.log("hello" + sms);
      console.log("POST call successful value returned in body", );
      let message = "Sms added successfully";
      ///action va etre changé
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
   
    });
       
 

  }

}