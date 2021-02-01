import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaintenancesService } from 'src/app/services/maintenance.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import jwt_decode from "../../../../../node_modules/jwt-decode";


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html'
})
export class FormFieldComponent implements OnInit {

  public formMaintenance:FormGroup;
  
  constructor( public maintenancesService:MaintenancesService,public snackBar: MatSnackBar) {
                this.formMaintenance = new FormGroup({
                  title: new FormControl('', [Validators.required]),
                  descriptionMaintenance: new FormControl('', [Validators.required]),
                  type: new FormControl('', [Validators.required]),
               
                 })
  }

  ngOnInit() {
    this.formMaintenance = new FormGroup({
      title: new FormControl('', [Validators.required]),
      descriptionMaintenance: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      status: new FormControl('',),
      userOwner: new FormControl(''),
   
     })
  }
  // add maintenance
  onSubmit() {
    let token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    this.formMaintenance.patchValue({
    
      userOwner: JSON.parse(JSON.stringify(decoded))._id,
      
    });
    console.log(this.formMaintenance);
    this.maintenancesService.addMaintenance(this.formMaintenance.value).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
                      let message = "Maintenance added successfully";
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
     
  }
  
}