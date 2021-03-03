import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/app-validators';
import { UsersService } from 'src/app/services/users.service';
import jwt_decode from "jwt-decode";
import { SmsService } from 'src/app/services/sms.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-top-info-content',
  templateUrl: './top-info-content.component.html',
  styleUrls: ['./top-info-content.component.scss']
})
export class TopInfoContentComponent implements OnInit {
  
  public data: any;
  @Input('showInfoContent') showInfoContent:boolean = false;
  @Output() onCloseInfoContent: EventEmitter<any> = new EventEmitter();
  contactForm: FormGroup;
  role:any;
  controls = [
    { name: 'Notifications', checked: true },
    { name: 'Tasks', checked: true },
    { name: 'Events', checked: false },
    { name: 'Downloads', checked: true },
    { name: 'Messages', checked: true },
    { name: 'Updates', checked: false },
    { name: 'Settings', checked: true }
  ]
  formSms: FormGroup;
  constructor(public UserService: UsersService,public smsService: SmsService , public snackBar: MatSnackBar) { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
   this.role=JSON.parse(JSON.stringify(decoded)).roles[0].name
     this.UserService.getUser(JSON.parse(JSON.stringify(decoded))._id,).subscribe(res => {
     this.data=res;
     })
     this.formSms = new FormGroup({
      status: new FormControl(''),
      user: new FormControl(''),
      userOwner: new FormControl(''),
      contacts: new FormGroup({
        phone: new FormControl('',  [Validators.required]),
        message: new FormControl('',  [Validators.required]),
        type: new FormControl('',  [Validators.required]),
      }),

    })
  }

  public closeInfoContent(event){
    this.onCloseInfoContent.emit(event);
  }
  public onSubmit() {
    let token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    this.formSms.patchValue({
      userOwner: JSON.parse(JSON.stringify(decoded))._id,
      user: JSON.parse(JSON.stringify(decoded))._id,
      status: "envoyé"

    });
    this.smsService.addSms(this.formSms.value).subscribe(sms => {
    });
    this.smsService.SendSms(this.formSms.value.contacts.type, this.formSms.value.contacts.phone, this.formSms.value.contacts.message).subscribe(sms => {

    });
    let message = "Sms added successfully";
    let action = "close"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
    this.ngOnInit()

  }
}
