import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MaintenancesService } from 'src/app/services/maintenance.service';


@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html'
})
export class SortingComponent {
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns = [ 'requestDate','updatedDate', 'title', 'description', 'type', 'status', 'action'];
  public dataSource: any;
  public settings: Settings;
  constructor(public appSettings:AppSettings, private tablesService:MaintenancesService) {
    this.tablesService.getAllMaintenances().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    this.settings = this.appSettings.settings; 
  })
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}