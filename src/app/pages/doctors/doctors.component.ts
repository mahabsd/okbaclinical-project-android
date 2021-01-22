import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Doctor, DoctorProfile, DoctorWork, DoctorContacts } from './doctor.model';
import { DoctorsService } from './doctors.service';
import { DoctorDialogComponent } from './doctor-dialog/doctor-dialog.component';
 
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ DoctorsService ]  
})
export class DoctorsComponent implements OnInit {
  public doctors: Doctor[];
  public searchText: string;
  public page:any;
  public settings: Settings;
  public showSearch:boolean = false;
  public viewType:string = 'grid';
  constructor(public appSettings:AppSettings, 
              public dialog: MatDialog,
              public doctorsService:DoctorsService){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
      this.getDoctors();         
  }

  public getDoctors(): void {
      this.doctors = null; //for show spinner each time
      this.doctorsService.getDoctors().subscribe(doctors => this.doctors = doctors);    
  }
  public addDoctor(doctor:Doctor){
      this.doctorsService.addDoctor(doctor).subscribe(doctor => this.getDoctors());
  }
  public updateDoctor(doctor:Doctor){
      this.doctorsService.updateDoctor(doctor).subscribe(doctor => this.getDoctors());
  }
  public deleteDoctor(doctor:Doctor){
     this.doctorsService.deleteDoctor(doctor._id).subscribe(doctor => this.getDoctors());
  }
  
  public changeView(viewType){
      this.viewType = viewType;
      this.showSearch = false;
  }

  public onPageChanged(event){
      this.page = event;
      this.getDoctors();    
      document.getElementById('main').scrollTop = 0;
  }

  public openDoctorDialog(doctor){
      let dialogRef = this.dialog.open(DoctorDialogComponent, {
          data: doctor
      });
      dialogRef.afterClosed().subscribe(doctor => {
          if(doctor){
              (doctor.id) ? this.updateDoctor(doctor) : this.addDoctor(doctor);
          }
      });
      this.showSearch = false;
  }

}