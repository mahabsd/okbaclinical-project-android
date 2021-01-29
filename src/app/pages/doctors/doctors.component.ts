import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Doctor, DoctorProfile, DoctorWork, DoctorContacts } from './doctor.model';
import { DoctorsService } from '../../services/doctors.service';
import { DoctorDialogComponent } from './doctor-dialog/doctor-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DoctorsComponent implements OnInit {
  public doctors;
  public searchText: string;
  public page: any;
  public settings: Settings;
  public showSearch: boolean = false;
  public viewType: string = 'grid';
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    public doctorsService: DoctorsService, public snackBar: MatSnackBar) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.getDoctors();
  }

  public getDoctors(): void {
    this.doctors = null; //for show spinner each time
    this.doctorsService.getAllDoctors().subscribe(doctor =>

      this.doctors = doctor);
  }
  public addDoctor(doctor: Doctor) {
    this.doctorsService.addDoctor(doctor).subscribe(doctor => {
      this.getDoctors()
      console.log("hello" + doctor);

    });
  }
  public updateDoctor(doctor: Doctor) {
    this.doctorsService.updateDoctor(doctor._id, doctor).subscribe(doctor => this.getDoctors());
  }
  // public deleteDoctor(doctor: Doctor) {

  //   this.doctorsService.deleteDoctor(doctor._id).subscribe(doctor => {
  //     this.getDoctors();
  //   });
  // }

  public changeView(viewType) {
    this.viewType = viewType;
    this.showSearch = false;
  }

  public onPageChanged(event) {
    this.page = event;
    this.getDoctors();
    document.getElementById('main').scrollTop = 0;
  }

  public openDoctorDialog(doctor) {

    let dialogRef = this.dialog.open(DoctorDialogComponent, {
      data: doctor
    });
    dialogRef.afterClosed().subscribe(doctor => {
      let doc = doctor
      if (doc) {
        if (doc._id) {
          this.updateDoctor(doc)
        } else {
          delete doc._id;
          this.addDoctor(doc)
        }
        //   (doc._id) ? this.updateDoctor(doc) : delete doc._id; this.addDoctor(doc);
      }
    });
    this.showSearch = false;
  }

  openDialog(user): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        message: 'Are you sure want to delete ?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      let confirm = confirmed;

      if (confirm) {

        this.doctorsService.deleteDoctor(user._id).subscribe(user => {
          this.getDoctors();
          let message = "User deleted successfully";
          let action = "close"
          this.snackBar.open(message, action, {
            duration: 2000,
          });
        });
      }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  users;
  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  // if(data) {
  //     this.message = data.message || this.message;
  //     if (data.buttonText) {
  //         console.log("data.buttonText" + data.buttonText);

  //         this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
  //         this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
  //     }
  // }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
