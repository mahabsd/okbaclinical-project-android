import { Component, OnInit, Inject, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from '../user.model';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  public form: FormGroup;
  public passwordHide: boolean = true;
  public colors = [
    { value: 'gradient-purple', viewValue: 'Purple' },
    { value: 'gradient-indigo', viewValue: 'Indigo' },
    { value: 'gradient-teal', viewValue: 'Teal' },
    { value: 'gradient-blue', viewValue: 'Blue' },
    { value: 'gradient-orange', viewValue: 'Orange' },
    { value: 'gradient-green', viewValue: 'Green' },
    { value: 'gradient-pink', viewValue: 'Pink' },
    { value: 'gradient-red', viewValue: 'Red' },
    { value: 'gradient-amber', viewValue: 'Amber' },
    { value: 'gradient-gray', viewValue: 'Gray' },
    { value: 'gradient-brown', viewValue: 'Brown' },
    { value: 'gradient-lime', viewValue: 'Lime' }
  ];
  public roles;
  public image = null;
  submitted: boolean;
  choosen: boolean;
  formData = new FormData();

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User, public userService: LoginService, public snackBar: MatSnackBar) {
    this.form = new FormGroup({
      _id: new FormControl(''),
      username: new FormControl('',),
      password: new FormControl('',),
      profile: new FormGroup({
        name: new FormControl(''),
        surname: new FormControl(''),
        birthday: new FormControl(''),
        gender: new FormControl(''),
        //image: new FormControl(''),
      }),
      work: new FormGroup({
        company: new FormControl(''),
        roles: new FormControl([]),
        soldeConge: new FormControl('')
      }),
      contacts: new FormGroup({
        email: new FormControl('',),
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
        // isDeleted: new FormControl(''),
        registrationDate: new FormControl(''),
        joinedDate: new FormControl(''),
        bgColor: new FormControl(''),
      })
    });

  }

  ngOnInit() {
    if (this.user) {
      this.form.patchValue(this.user);
    }
    else {
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
    this.userService.getAllRoles().subscribe(res => {
      this.roles = res;
    }
    )
  }

  openSnackBarUpdate() {
    if (this.image != null) {
      this.formData.append('image', this.image, this.image.name);
    }

    Object.keys(this.form.value).forEach(fieldName => {
    //  console.log(fieldName, JSON.stringify(this.form.value[fieldName]));
      this.formData.append(fieldName, JSON.stringify(this.form.value[fieldName]));
    })
    let message = "User updated successfully"
    let action = "close"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  close(): void {
    this.dialogRef.close();
  }

  selectImage(event) {
    if (event.target.value) {
      this.image = <File>event.target.files[0];
      console.log("event " + this.image);
    }
  }
  openSnackBarAdd() {
    if (this.image != null) {
      this.formData.append('image', this.image, this.image.name);
    }

    Object.keys(this.form.value).forEach(fieldName => {
     console.log(fieldName, JSON.stringify(this.form.value[fieldName]));
      this.formData.append(fieldName, JSON.stringify(this.form.value[fieldName]));
    })

    console.log(this.formData + " this.formData");

    let message = "User added successfully";
    let action = "close"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
