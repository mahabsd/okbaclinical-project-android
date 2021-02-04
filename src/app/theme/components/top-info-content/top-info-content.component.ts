import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { emailValidator } from '../../utils/app-validators';

@Component({
  selector: 'app-top-info-content',
  templateUrl: './top-info-content.component.html',
  styleUrls: ['./top-info-content.component.scss']
})
export class TopInfoContentComponent implements OnInit {
  @Input('showInfoContent') showInfoContent:boolean = false;
  @Output() onCloseInfoContent: EventEmitter<any> = new EventEmitter();
  contactForm: FormGroup;
  controls = [
    { name: 'Notifications', checked: true },
    { name: 'Tasks', checked: true },
    { name: 'Events', checked: false },
    { name: 'Downloads', checked: true },
    { name: 'Messages', checked: true },
    { name: 'Updates', checked: false },
    { name: 'Settings', checked: true }
  ]
  usersUrl: string = environment.basUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.contactForm = new FormGroup({
      from:  new FormControl('',[  Validators.required]),
      to:  new FormControl('',[  Validators.required]),
      message:  new FormControl('',[  Validators.required]),
    });
  }

  public onContactFormSubmit(values:Object):void {
    if (this.contactForm.valid) {
      console.log(values);
    }
  }

  public closeInfoContent(event){
    this.onCloseInfoContent.emit(event);
  }


  sendSms(data) {
    //console.log(data);
    return this.http.post(this.usersUrl + "sms", data ).subscribe(schedule => {
      // this.getAllSchedules()
    });
  }
  


}
