import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Actionnaire, ActionnaireProfile, ActionnaireWork, ActionnaireContacts, ActionnaireSettings } from '../actionnaires.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actionnaire-dialog',
  templateUrl: './actionnaire-dialog.component.html',
  styleUrls: ['./actionnaire-dialog.component.scss']
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
              @Inject(MAT_DIALOG_DATA) public actionnaire: Actionnaire, public snackBar: MatSnackBar) {
                this.form = new FormGroup({
                  _id: new FormControl(''),
                  username: new FormControl('', [Validators.required, Validators.minLength(5)]),
                  password: new FormControl('', [Validators.required]),
                   profile: new FormGroup({
                     name: new FormControl(''),
                     surname: new FormControl(''), 
                     birthday:new FormControl(''),
                     image: new FormControl(''),
                   }),
                   work: new FormGroup({
                    position:new FormControl(''),
                   }),
                   contacts: new FormGroup({
                     email: new FormControl(''),
                     phone: new FormControl(''),
                     address: new FormControl(''),
                   }),
                   settings: new FormGroup({
                      //isActive: new FormControl(''),
                      //isDeleted: new FormControl(''),
                       bgColor: new FormControl(''),
                    })
                 })
  }

  ngOnInit() {
    if(this.actionnaire){
      this.form.patchValue(this.actionnaire);
    } 
    else{
      this.actionnaire = new Actionnaire();
      this.actionnaire.profile = new ActionnaireProfile();
      this.actionnaire.work = new ActionnaireWork();
      this.actionnaire.contacts = new ActionnaireContacts();
      this.actionnaire.settings = new ActionnaireSettings();

    } 
  }
  openSnackBarAdd() {
    let message = "Actionnaire added successfully";
    let action = "Annuler"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  openSnackBarUpdate() {
    let message = "Actionnaire updated successfully"
let action = "Annuler"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  close(): void {
    this.dialogRef.close();
  }

}

