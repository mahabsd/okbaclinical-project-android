import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { ChatComponent } from './chat.component';
import { PipesModule } from '../../theme/pipes/pipes.module';

export const routes = [
  { path: '', component: ChatComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PerfectScrollbarModule,
    SharedModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [
    ChatComponent
  ]
})
export class ChatModule { }