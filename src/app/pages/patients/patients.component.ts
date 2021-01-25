import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Patient
} from './patient.model';
import { PatientsService } from 'src/app/services/patients.service';
import { PatientDialogComponent } from './patient-dialog/patient-dialog.component';

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
              public patientsService:PatientsService){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
      this.getPatients();   
      console.log(this.patients);
            
  }

  public getPatients(): void {
      this.patients = null; //for show spinner each time
      this.patientsService.getAllPatients().subscribe(patients =>{this.patients=patients
        console.log(patients)}  );    
  }
  public addPatient(patient:Patient){
      this.patientsService.addPatient(patient).subscribe(patient => {console.log(patient), this.getPatients()});
  }
  public updatePatient(patient:Patient){
      this.patientsService.updatePatient(patient, patient).subscribe(patient => this.getPatients());
  } 
  public deletePatient(patient:Patient){
     this.patientsService.deletePatient(patient).subscribe(patient => this.getPatients());
  }
  
  public changeView(viewType){
      this.viewType = viewType;
      this.showSearch = false;
  }

  public onPageChanged(event){
      this.page = event;
      this.getPatients();    
      document.getElementById('main').scrollTop = 0;
  }

  public openPatientDialog(patient){
      let dialogRef = this.dialog.open(PatientDialogComponent, {
          data: patient
      });
      dialogRef.afterClosed().subscribe(patient => {
          if(patient){
              (patient.id) ? this.updatePatient(patient) : this.addPatient(patient);
          }
      });
      this.showSearch = false;
  }

}