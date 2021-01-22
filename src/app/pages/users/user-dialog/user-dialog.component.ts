import { Component, OnInit, Inject,EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from '../user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
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
  public roles;
  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: User,  public UserService: LoginService) {
                this.form = new FormGroup({
                 _id:new FormControl(''),  
                  username: new FormControl('', [Validators.required, Validators.minLength(5)]),
                  password: new FormControl('', [Validators.required]),
                  profile: new FormGroup({
                    name: new FormControl(''),
                    surname: new FormControl(''), 
                    birthday:new FormControl(''),
                    gender: new FormControl(''),
                    image: new FormControl(''),
                  }),
                  work: new FormGroup({
                    company:new FormControl(''),
                    roles:new FormControl([]),
                   soldeConge: new FormControl('')
                  }),
                  contacts: new FormGroup({
                    email: new FormControl('', [Validators.required]),
                    phone: new FormControl(''),
                    address: new FormControl(''),          
                  }),
                  social: new FormGroup({
                    facebook: new FormControl(''),
                    twitter: new FormControl(''),
                    google: new FormControl('')
                  }),
                  settings: new FormGroup({
                  // isActive: new FormControl(''),
                    isDeleted: new FormControl(''),
                     registrationDate: new FormControl(''),
                     joinedDate: new FormControl(''),
                     bgColor: new FormControl(''),
                  })
                });

  }

  ngOnInit() {
    if(this.user){
      this.form.setValue(this.user);
    } 
    else{
      this.user = new User();
      this.user.profile = new UserProfile();
      this.user.work = new UserWork();
      this.user.contacts = new UserContacts();
      this.user.social = new UserSocial();
      this.user.settings = new UserSettings();
    } 
    this.getRoles();
  }

  public getRoles(): void {
    this.roles = null; //for show spinner each time
    this.UserService.getAllRoles().subscribe(res => {
        this.roles = res;
        console.log(this.roles);
        console.log("hello users"+ this.roles);
    }
    )
  }
  close(): void {
    this.dialogRef.close();
  }

}
