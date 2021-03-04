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
  // @ViewChild(MatSort) sort: MatSort;
  public displayedColumns = ['SendTo','requestDate', 'phone', 'message', 'status', 'action'];
  public displayedColumns1 = ['SendTo','requestDate', 'phone', 'message', 'status', 'action'];
  public displayedColumns2 = ['SendTo','requestDate', 'phone', 'message', 'status', 'action'];
  public displayedColumns3 = ['SendTo','requestDate', 'phone', 'message', 'status', 'action'];
  public dataSource: any;
  public dataSource1: any;
  public dataSource2: any;
  public dataSource3: any;
  public data: any;
  public data1: any;
  public data2: any;
  public data3: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings, private tablesService: SmsService, public snackBar: MatSnackBar) {
    //   this.tablesService.getAllSmss().subscribe(res => {
    //     this.dataSource = res;
    //     console.log(this.dataSource);
    // })
    this.settings = this.appSettings.settings; 

  }
  // ngOnInit() {
  //   this.tablesService.getAllSmssPatient().subscribe(res => {
  //     this.dataSource = (res);
  //     this.dataSource = this.dataSource.sort((data1: any, data2: any) => {
  //       return data2.createdAt - data1.createdAt
  //     })
     
  //      this.dataSource.reverse();
  //     this.data = new MatTableDataSource<Element>(this.dataSource)
  //     this.settings = this.appSettings.settings;
      
  //   })
  //   this.tablesService.getAllSmssacts().subscribe(res => {
  //     this.dataSource1 = (res);
  //     this.dataSource1 = this.dataSource2.sort((data1: any, data2: any) => {
  //       return data2.createdAt - data1.createdAt
  //     })
     
  //      this.dataSource1.reverse();
  //     this.data1 = new MatTableDataSource<Element>(this.dataSource1)
  //     this.settings = this.appSettings.settings;
  //   })
  //   this.tablesService.getAllSmssdocs().subscribe(res => {
  //     this.dataSource2 = (res);
  //     this.dataSource2 = this.dataSource2.sort((data1: any, data2: any) => {
  //       return data2.createdAt - data1.createdAt
  //     })
     
  //      this.dataSource2.reverse();
  //     this.data2 = new MatTableDataSource<Element>(this.dataSource2)
  //     this.settings = this.appSettings.settings;
  //   })
  //   this.tablesService.getAllSmssauto().subscribe(res => {
  //     this.dataSource3 = (res);
  //     this.dataSource3 = this.dataSource3.sort((data1: any, data2: any) => {
  //       return data2.createdAt - data1.createdAt
  //     })
     
  //      this.dataSource3.reverse();
  //     this.data3 = new MatTableDataSource<Element>(this.dataSource3)
  //     this.settings = this.appSettings.settings;
  //   })
  // }
  ngAfterViewInit() {
    this.tablesService.getAllSmss().subscribe(res => {
      this.dataSource = (res);
      this.dataSource = this.dataSource.sort((data1: any, data2: any) => {
        return data2.createdAt - data1.createdAt
      })
     
       this.dataSource.reverse();
      this.data = new MatTableDataSource<Element>(this.dataSource)
      this.settings = this.appSettings.settings;
      
    })
  }
  //   this.tablesService.getAllSmssacts().subscribe(res => {
  //     this.dataSource1 = (res);
  //     this.dataSource1 = this.dataSource2.sort((data1: any, data2: any) => {
  //       return data2.createdAt - data1.createdAt
  //     })
     
  //      this.dataSource1.reverse();
  //     this.data1 = new MatTableDataSource<Element>(this.dataSource1)
  //     this.settings = this.appSettings.settings;
  //   })
  //   this.tablesService.getAllSmssdocs().subscribe(res => {
  //     this.dataSource2 = (res);
  //     this.dataSource2 = this.dataSource2.sort((data1: any, data2: any) => {
  //       return data2.createdAt - data1.createdAt
  //     })
     
  //      this.dataSource2.reverse();
  //     this.data2 = new MatTableDataSource<Element>(this.dataSource2)
  //     this.settings = this.appSettings.settings;
  //   })
  //   this.tablesService.getAllSmssauto().subscribe(res => {
  //     this.dataSource3 = (res);
  //     this.dataSource3 = this.dataSource3.sort((data1: any, data2: any) => {
  //       return data2.createdAt - data1.createdAt
  //     })
     
  //      this.dataSource3.reverse();
  //     this.data3 = new MatTableDataSource<Element>(this.dataSource3)
  //     this.settings = this.appSettings.settings;
  //   })
  // }


  deleteDemande(element) {
    this.tablesService.deleteSms(element._id).subscribe(maitenance => {
      this.ngAfterViewInit();
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
      this.ngAfterViewInit();

      
      let message = "Sms Envoyé ";
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }

}


