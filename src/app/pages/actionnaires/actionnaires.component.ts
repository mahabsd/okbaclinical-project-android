import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Actionnaire, ActionnaireProfile, ActionnaireWork, ActionnaireContacts } from './actionnaires.model';
import { ActionnairesService } from 'src/app/services/actionnaires.service';
import { ActionnaireDialogComponent } from './actionnaire-dialog/actionnaire-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionnairesmsComponent } from "./actionnaire-sms/actionnaire-sms.component";
import { SmsService } from 'src/app/services/sms.service';


@Component({
  selector: 'app-actionnaires',
  templateUrl: './actionnaires.component.html',
  styleUrls: ['./actionnaires.component.scss'],
  encapsulation: ViewEncapsulation.None,
//    providers: [ ActionnairesService ] 
})
export class ActionnairesComponent implements OnInit {
  public actionnaires;
  
  public searchText: string;
  public page:any;
  public settings: Settings;
  public showSearch:boolean = false;
  public viewType:string = 'grid';
  constructor(public appSettings:AppSettings, 
              public dialog: MatDialog,
              public actionnairesService:ActionnairesService,public smsService:SmsService  ,public snackBar: MatSnackBar){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.getActionnaires();
  }
  public AddetSendSms(Sms) {
    this.smsService.addSms(Sms).subscribe();
    this.smsService.SendSms(Sms.contacts.type, Sms.contacts.phone, Sms.contacts.message).subscribe();
  }
  public getActionnaires(): void {
    this.actionnaires = null; //for show spinner each time
    this.actionnairesService.getAllActionnaires().subscribe(actionnaire =>

      this.actionnaires = actionnaire);
  }
  public addActionnaire(actionnaire: Actionnaire) {
    this.actionnairesService.addActionnaire(actionnaire).subscribe(actionnaire => {
      this.getActionnaires()
    });
  }
  public updateActionnaire(Actionnaire: Actionnaire) {
    this.actionnairesService.updateActionnaire(Actionnaire._id, Actionnaire).subscribe(Actionnaire => {
      this.getActionnaires();
    });
  }
  public deleteActionnaire(Actionnaire: Actionnaire) {
    this.actionnairesService.deleteActionnaire(Actionnaire._id).subscribe(Actionnaire => {
      this.getActionnaires();
      let message = "Actionnaire deleted successfully";
      ///action va etre changé
      let action = "Annuler"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }
  public changeView(viewType) {
    this.viewType = viewType;
    this.showSearch = false;
  }

  public onPageChanged(event) {
    this.page = event;
    this.getActionnaires();
    document.getElementById('main').scrollTop = 0;
  }

  public openActionnaireDialog(actionnaire) {

    let dialogRef = this.dialog.open(ActionnaireDialogComponent, {
      data: actionnaire
    });
    dialogRef.afterClosed().subscribe(actionnaire => {
      let pati = actionnaire
      if (pati._id) {
        this.updateActionnaire(pati) 
      }else{
         delete pati._id;
          this.addActionnaire(pati);
      }
    });
    this.showSearch = false;
  }
  public openSmsDialog(actionnaire) {


    let dialogRef = this.dialog.open(ActionnairesmsComponent, {
      data: actionnaire
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