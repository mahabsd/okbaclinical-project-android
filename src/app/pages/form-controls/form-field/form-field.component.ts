import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaintenancesService } from 'src/app/services/maintenance.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import jwt_decode from "../../../../../node_modules/jwt-decode";
import { MessagesService } from 'src/app/theme/components/messages/messages.service';
import { LoginService } from 'src/app/services/login.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  providers: [MessagesService]
})
export class FormFieldComponent implements OnInit {
  public users: any[any];
  public formMaintenance: FormGroup;
  public messages: any;

  constructor(public maintenancesService: MaintenancesService, public snackBar: MatSnackBar, public loginService: LoginService,
    public messagesService: MessagesService, public UserService: UsersService) {
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
        console.log("POST call successful value returned in body", val);
        let message = "Maintenance added successfully";
        ///action va etre changé
        let action = "close"
        this.snackBar.open(message, action, {
          duration: 2000,
        });
         //for show spinner each time
         
        if (this.formMaintenance.value.type === "informatique") {
          this.UserService.getAllUsers().subscribe((res: any[any]) => {
            let user = res.find(x => x.work.roles[0].name === 'Responsable-info')
            console.log(user);
            console.log(user._id);
            
            
            this.messages = {
              reciever: user._id,
              text: "your vacation leaves has been approved0",
              userOwner: JSON.parse(JSON.stringify(decoded))._id,
            }
            console.log(this.messages);
          })
        }

          if (this.formMaintenance.value.type === "autres") {
            this.UserService.getAllUsers().subscribe((res: any[any]) => {
              let user1 = res.find(x => x.work.roles[0].name === 'respon-maintenance')
              console.log("autre"+user1);
            console.log("autre"+user1._id);
            
              this.messages = {
                reciever: user1._id,
                text: "your vacation leaves has been approved1",
                userOwner: JSON.parse(JSON.stringify(decoded))._id,
              }
              console.log(this.messages);
              
            })
          }


    this.messagesService.sendNotification(this.messages).subscribe(res =>
      console.log(res + "notifications")
    );
    this.ngOnInit()
  },
        () => {
  console.log("The POST observable is now completed.");

});

  }

}