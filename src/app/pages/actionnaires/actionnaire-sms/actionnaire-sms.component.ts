import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Actionnaire, ActionnaireProfile, ActionnaireWork, ActionnaireContacts, ActionnaireSettings } from '../actionnaires.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-actionnaire-dialog',
  templateUrl: './actionnaire-sms.component.html',
  styleUrls: ['./actionnaire-sms.component.scss']
})
export class ActionnairesmsComponent implements OnInit {
  
    
    

  public form:FormGroup;
  constructor(public dialogRef: MatDialogRef<ActionnairesmsComponent>,
              @Inject(MAT_DIALOG_DATA) public actionnaire: Actionnaire, public snackBar: MatSnackBar) {
                this.form = new FormGroup({
                  _id: new FormControl(''),
                  userOwner:new FormControl(''),
                  acts:new FormControl(''),
                  status:new FormControl(''),
                   contacts: new FormGroup({
                     phone: new FormControl(''),
                     message: new FormControl(''),
                     type:new FormControl(''),
                     
                  

                   }),
                  
                 })
                
  }

  ngOnInit() {
    let token = localStorage.getItem('token');
  var decoded = jwt_decode(token);
  
    if(this.actionnaire){
      this.form.patchValue(this.actionnaire);
      this.form.patchValue({
        acts:this.actionnaire._id,
        userOwner: JSON.parse(JSON.stringify(decoded))._id,
        status: "envoyé"
  
      });;
      
    } 
    else{
      this.actionnaire = new Actionnaire();
      this.actionnaire.contacts = new ActionnaireContacts();
      
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

