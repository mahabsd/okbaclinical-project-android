import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { SmsService } from 'src/app/services/sms.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sms-table',
  templateUrl: './sms-table.component.html'
})
export class SmstableComponent {
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns = ['requestDate','SendTo', 'phone', 'message', 'status', 'action'];
  public dataSource: any;
  public data: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings, private tablesService: SmsService, public snackBar: MatSnackBar) {
    //   this.tablesService.getAllSmss().subscribe(res => {
    //     this.dataSource = res;
    //     console.log(this.dataSource);
    // })
    this.settings = this.appSettings.settings; 

  }

  ngAfterViewInit() {
    this.tablesService.getAllSmss().subscribe(res => {
      this.dataSource = (res);
      this.data = new MatTableDataSource<Element>(this.dataSource)
      this.settings = this.appSettings.settings;
      this.data.sort = this.sort;
    })
  }


  deleteDemande(element) {
    this.tablesService.deleteSms(element._id).subscribe(maitenance => {
      this.tablesService.getAllSmss().subscribe(res => {
        this.dataSource = res;
        this.data = new MatTableDataSource<Element>(this.dataSource)

      })
      let message = "SmS supprimer ";
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }
  validerDemande(element) {
    var statut = "envoyé";
    var formMaintenance = ({

      status: JSON.parse(JSON.stringify(statut)),

    });
    this.tablesService.SendSms(element.contacts.type, element.contacts.phone, element.contacts.message).subscribe(sms => {
    })
    this.tablesService.updateSms(element._id, formMaintenance).subscribe(sms => {

      this.tablesService.getAllSmss().subscribe(res => {
        this.dataSource = res;
        this.data = new MatTableDataSource<Element>(this.dataSource)

      })
      let message = "Sms Envoyé ";
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }

}


