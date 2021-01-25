import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Actionnaire, ActionnaireProfile, ActionnaireWork, ActionnaireContacts, ActionnaireSocial, ActionnaireSettings } from '../actionnaires.model';

@Component({
  selector: 'app-Actionnaire-dialog',
  templateUrl: './Actionnaire-dialog.component.html',
  styleUrls: ['./Actionnaire-dialog.component.scss']
})
export class ActionnaireDialogComponent implements OnInit {
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
  constructor(public dialogRef: MatDialogRef<ActionnaireDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public actionnaire: Actionnaire,
              public fb: FormBuilder) {
    this.form = this.fb.group({
      id: null,
      username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],       
      profile: this.fb.group({
        name: null,
        surname: null,  
        birthday: null,
        gender: null,
        image: null
      }),
      work: this.fb.group({
        company: null,
        position: null,
        salary: null
      }),
      contacts: this.fb.group({
        email: null,
        phone: null,
        address: null          
      }),
      social: this.fb.group({
        facebook: null,
        twitter: null,
        google: null
      }),
      settings: this.fb.group({
        isActive: null,
        isDeleted: null,
        registrationDate: null,
        joinedDate: null,
        bgColor: null
      })
    });
  }

  ngOnInit() {
    
    if(this.actionnaire){
      this.form.setValue(this.actionnaire);
      console.log(this.actionnaire);
      
    } 
    else{
      this.actionnaire = new Actionnaire();
      this.actionnaire.profile = new ActionnaireProfile();
      this.actionnaire.work = new ActionnaireWork();
      this.actionnaire.contacts = new ActionnaireContacts();
      this.actionnaire.social = new ActionnaireSocial();
      this.actionnaire.settings = new ActionnaireSettings();
      console.log("nidhal "+this.actionnaire);
    } 
    
  }
 
  close(): void {
    this.dialogRef.close();
  }

}
