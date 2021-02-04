import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Doctor, DoctorProfile, DoctorWork, DoctorContacts, DoctorSettings } from '../doctor.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctor-dialog',
  templateUrl: './doctor-dialog.component.html',
  styleUrls: ['./doctor-dialog.component.scss']
})
export class DoctorDialogComponent implements OnInit {

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
  image: File;
  constructor(public dialogRef: MatDialogRef<DoctorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public doctor: Doctor, public snackBar: MatSnackBar, public doctorsService : DoctorsService) {
                this.form = new FormGroup({
                  _id: new FormControl(''),
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
                     // isActive: new FormControl(''),
                     // isDeleted: new FormControl(''),
                       bgColor: new FormControl(''),
                    })
                 })
  }

  ngOnInit() {
    if(this.doctor){
      this.form.patchValue(this.doctor);
    } 
    else{
      this.doctor = new Doctor();
      this.doctor.profile = new DoctorProfile();
      this.doctor.work = new DoctorWork();
      this.doctor.contacts = new DoctorContacts();
      this.doctor.settings = new DoctorSettings();

    } 
  }
  openSnackBarAdd() {
    let message = "Doctor added successfully";
    let action = "Annuler"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  openSnackBarUpdate() {
    let message = "Doctor updated successfully"
let action = "Annuler"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  close(): void {
    this.dialogRef.close();
  }
  selectImage(event) {
    console.log(event + "event ");
    
    if (event.target.value) {
      this.form.patchValue({
        profile : {
          image : event
        }
      })

      console.log("event.target.files[0] " + event.target.files[0]);
      
       this.image = <File>event.target.files[0];
      console.log( this.image)
       
    }
    
  }

  submit(){
        let fd = new FormData();
    if (this.image) {
      fd.append('image', this.image, this.image.name );
   
    }

    this.form.patchValue({
      profile: {
        image: fd
      }
    })

        this.doctorsService.postImage(fd).subscribe(res => {
    console.log(res);
    
    });

  }
}

