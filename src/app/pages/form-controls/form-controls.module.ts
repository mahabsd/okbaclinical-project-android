import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { FilteringComponent } from './filtering/filtering.component';
import { SortingComponent, } from './sorting/sorting.component';
import { SmsSendComponent } from "./SmsSend/sms-send.component";
import { CongeComponent } from './conge/filtering.component';
import { MatTableModule } from '@angular/material/table' 
import { AuthActivateHolidaysGuard } from 'src/app/services/canActivateHolidays.guard';

export const routes = [
  { path: '', redirectTo: 'datepicker', pathMatch: 'full'},
  { path: 'datepicker', canActivate:[AuthActivateHolidaysGuard], component: DatepickerComponent, data: { breadcrumb: 'Datepicker' } },
  { path: 'Holidays-list',canActivate:[AuthActivateHolidaysGuard] , component: CongeComponent, data: { breadcrumb: 'Holidays list' } },
  { path: 'liste-maintenance', component: SortingComponent, data: { breadcrumb: 'Sorting table' } },
  { path: 'holidays-requests-list', component: FilteringComponent, data: { breadcrumb: 'holidays requests list' } },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    MatTableModule
  ],
  declarations: [
    AutocompleteComponent, 
    CheckboxComponent, 
    DatepickerComponent, 
    FormFieldComponent, 
    InputComponent, 
    RadioButtonComponent, 
    SelectComponent, 
    SliderComponent, 
    SlideToggleComponent,
    FilteringComponent,
    SmsSendComponent,
    CongeComponent
  ]
})
export class FormControlsModule { }