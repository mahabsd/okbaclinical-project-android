import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DoctorsComponent } from './doctors.component';
import { DoctorsData } from './doctors.data';
import { DoctorDialogComponent } from './doctor-dialog/doctor-dialog.component';

export const routes = [
  { path: '', component: DoctorsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(DoctorsData, { delay: 500 }),
    NgxPaginationModule,
    SharedModule,
    PipesModule    
  ],
  declarations: [
    DoctorsComponent,
    DoctorDialogComponent
  ],
  entryComponents:[
    DoctorDialogComponent
  ]
})
export class DoctorsModule { }
