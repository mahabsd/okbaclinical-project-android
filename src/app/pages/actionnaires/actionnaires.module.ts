import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ActionnairesComponent } from './actionnaires.component';
import { ActionnairesData } from './actionnaires.data';
import { ActionnaireDialogComponent } from './actionnaire-dialog/actionnaire-dialog.component';

export const routes = [
  { path: '', component: ActionnairesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ActionnairesData, { delay: 500 }),
    NgxPaginationModule,
    SharedModule,
    PipesModule    
  ],
  declarations: [
    ActionnairesComponent,
    ActionnaireDialogComponent
  ],
  entryComponents:[
    ActionnaireDialogComponent
  ]
})
export class ActionnairesModule { }
