import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { PatientsComponent } from './patients.component';
import { PatientsData } from './patients.data';
import { PatientDialogComponent } from './patient-dialog/patient-dialog.component';

export const routes = [
  { path: '', component: PatientsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(PatientsData, { delay: 500 }),
    NgxPaginationModule,
    SharedModule,
    PipesModule    
  ],
  declarations: [
    PatientsComponent,
    PatientDialogComponent
  ],
  entryComponents:[
    PatientDialogComponent
  ]
})
export class PatientsModule { }
