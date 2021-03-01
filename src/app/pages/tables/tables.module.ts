import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { BasicComponent } from './basic/basic.component';
import { PagingComponent } from './paging/paging.component';
import { SortingComponent } from './sorting/sorting.component';
import { FilteringComponent } from './filtering/filtering.component';
import { SelectingComponent } from './selecting/selecting.component';
import { NgxTableComponent } from './ngx-table/ngx-table.component';
import { TablesService } from './tables.service';
import { SmstableComponent } from "./smstable/sms-table.component";
import { FormFieldComponent } from '../form-controls/form-field/form-field.component';
 
export const routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full'},
//{ path: 'basic', component: BasicComponent, data: { breadcrumb: 'Basic table' } },
 // { path: 'paging', component: PagingComponent, data: { breadcrumb: 'Paging table' } },
  { path: 'sorting', component: SortingComponent, data: { breadcrumb: 'Sorting table' } },
 // { path: 'holidays-requests-list', component: FilteringComponent, data: { breadcrumb: 'Filtering table' } },
  //{ path: 'selecting', component: SelectingComponent, data: { breadcrumb: 'Selecting table' } },
 // { path: 'ngx-table', component: NgxTableComponent, data: { breadcrumb: 'Ngx datatable' } },
  { path: 'liste-maintenance', component: SortingComponent, data: { breadcrumb: 'Sorting table' } },
 // { path: 'liste-sms', component: SmstableComponent, data: { breadcrumb: 'Sorting table' } },
  { path: 'Demande-Maintenance', component: FormFieldComponent, data: { breadcrumb: 'Form Field' } },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    SharedModule
  ],
  declarations: [
    BasicComponent, 
    PagingComponent, 
    SortingComponent,  
    NgxTableComponent, 
    SelectingComponent,
    SmstableComponent,
    FilteringComponent
  ],
  providers: [
    TablesService
  ]
})
export class TablesModule { }
