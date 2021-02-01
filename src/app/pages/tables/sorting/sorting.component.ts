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
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns = [ 'requestDate','updatedDate', 'title', 'description', 'type', 'status', 'action'];
  public dataSource: any;
  public settings: Settings;
  constructor(public appSettings:AppSettings, private tablesService:MaintenancesService, public snackBar: MatSnackBar) {
    this.tablesService.getAllMaintenances().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    this.settings = this.appSettings.settings; 
  })
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  deleteDemande(element){
    this.tablesService.deleteMaintenance(element._id).subscribe(maitenance => {
      console.log((maitenance));
      this.tablesService.getAllMaintenances().subscribe(res => {
        this.dataSource = res;  
            
      })
      let message = "demande maintenance supprimer ";
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }
  validerDemande(element){
    var statut = "valider";
    var formMaintenance=({
    
      statut: JSON.parse(JSON.stringify(statut)),
      
    });
    this.tablesService.updateMaintenance(element._id,formMaintenance).subscribe(maitenance => {
      console.log((maitenance));
      this.tablesService.getAllMaintenances().subscribe(res => {
        this.dataSource = res;  
            
      })
      let message = "demande maintenance valider ";
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }

  }
    

