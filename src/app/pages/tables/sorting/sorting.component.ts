import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MaintenancesService } from 'src/app/services/maintenance.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html'
})
export class SortingComponent {
  public displayedColumns = ['requestDate', 'updatedDate', 'title', 'description', 'type', 'status', 'action'];
  public dataSource: any;
  public data: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings, private tablesService: MaintenancesService, public snackBar: MatSnackBar) {
  }

  ngAfterViewInit() {
    this.tablesService.getAllMaintenances().subscribe(res => {
      this.dataSource = (res);
      this.settings = this.appSettings.settings;
      this.dataSource.sort((data1: any, data2: any) => {
        return data2.createdAt - data1.createdAt
      })
      this.dataSource.reverse();
      this.data = new MatTableDataSource<Element>(this.dataSource)
    })

  }
  deleteDemande(element) {
    this.tablesService.deleteMaintenance(element._id).subscribe(maitenance => {
      console.log((maitenance));
      this.tablesService.getAllMaintenances().subscribe(res => {
        this.dataSource = res;
        this.data = new MatTableDataSource<Element>(this.dataSource)

      })
      let message = "demande maintenance supprimer ";
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }
  validerDemande(element) {
    var statut = "validated";
    var formMaintenance = ({
      statut: JSON.parse(JSON.stringify(statut)),
    });
    this.tablesService.updateMaintenance(element._id, formMaintenance).subscribe(maitenance => {
      this.tablesService.getAllMaintenances().subscribe(res => {
        this.dataSource = res;
        this.data = new MatTableDataSource<Element>(this.dataSource)
      })
      let message = "demande maintenance validée ";
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }
}


