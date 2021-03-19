import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Patient, PatientProfile, PatientWork, PatientContacts } from './patient.model';
import { PatientsService } from 'src/app/services/patients.service';
import { PatientDialogComponent } from './patient-dialog/patient-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientsmsComponent } from "./patient-sms/patient-sms.component";
import { SmsService } from 'src/app/services/sms.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  encapsulation: ViewEncapsulation.None,
//    providers: [ PatientsService ] 
})
export class PatientsComponent implements OnInit {
  public patients;
  public searchText: string;
  public page:any;
  public settings: Settings;
  public showSearch:boolean = false;
  public viewType:string = 'grid';
  constructor(public appSettings:AppSettings, 
              public dialog: MatDialog,
              public patientsService:PatientsService,public smsService:SmsService ,public snackBar: MatSnackBar){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.getPatients();
  }

  public getPatients(): void {
    this.patients = null; //for show spinner each time
    this.patientsService.getAllPatients().subscribe(patient =>

    {  this.patients = patient;
    } );
  }
  public addPatient(patient: Patient) {
    this.patientsService.addPatient(patient).subscribe(patient => {
      this.getPatients();
    });
  }
  public updatePatient(Patient: Patient) {
    this.patientsService.updatePatient(Patient._id, Patient).subscribe(Patient => this.getPatients());
  }
  public deletePatient(Patient: Patient) {
    this.patientsService.deletePatient(Patient._id).subscribe(Patient => {
      this.getPatients();
      let message = "Patient deleted successfully";
      ///action va etre changé
      let action = "Annuler"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }
  public AddetSendSms(Sms) {
    this.smsService.addSms(Sms).subscribe(sms => {

    });
    this.smsService.SendSms(Sms.contacts.type, Sms.contacts.phone, Sms.contacts.message).subscribe(sms => {

    });
  }
  public changeView(viewType) {
    this.viewType = viewType;
    this.showSearch = false;
  }

  public onPageChanged(event) {
    this.page = event;
    this.getPatients();
    document.getElementById('main').scrollTop = 0;
  }

  public openPatientDialog(patient) {

    let dialogRef = this.dialog.open(PatientDialogComponent, {
      data: patient
    });
    dialogRef.afterClosed().subscribe(patient => {
      let pati = patient
      if (pati._id) {
        this.updatePatient(pati) 
      }else{
        delete pati._id; 
        this.addPatient(pati);
      }
    });
    this.showSearch = false;
  }
  public openSmsDialog(patient) {

    let dialogRef = this.dialog.open(PatientsmsComponent, {
      data: patient
    });
    dialogRef.afterClosed().subscribe(sms => {
      
      if (sms) {
        delete sms._id; 
        this.AddetSendSms(sms) 
      }
    });
    this.showSearch = false;
  }

}
