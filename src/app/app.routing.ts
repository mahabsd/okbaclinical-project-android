import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { AuthGuard } from './services/auth.guard';
import { SmsSendComponent } from './pages/form-controls/SmsSend/sms-send.component';
import { SmstableComponent } from './pages/tables/smstable/sms-table.component';
import { activateSmsMessage } from "src/app/services/activatesmsmessage";
import { AuthActivateSMSGuard } from './services/canActivateSMS.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: PagesComponent, children: [
            { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } },
            { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
            { path: 'patients', loadChildren: () => import('./pages/patients/patients.module').then(m => m.PatientsModule), data: { breadcrumb: 'Patients' } },
            // { path: 'dynamic-menu', loadChildren: () => import('./pages/dynamic-menu/dynamic-menu.module').then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' }  },          
            // { path: 'ui', loadChildren: () => import('./pages/ui/ui.module').then(m => m.UiModule), data: { breadcrumb: 'UI' } },
            // { path: 'mailbox', loadChildren: () => import('./pages/mailbox/mailbox.module').then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } },
            { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule), data: { breadcrumb: 'Chat' } },
            { path: 'Holidays', loadChildren: () => import('./pages/form-controls/form-controls.module').then(m => m.FormControlsModule), data: { breadcrumb: 'Holidays' } },
            { path: 'Maintenances', loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule), data: { breadcrumb: 'Maintenances' } },
            { path: 'schedule', loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule), data: { breadcrumb: 'Schedule' } },
            // { path: 'maps', loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule), data: { breadcrumb: 'Maps' } },
            //{ path: 'charts', loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },
            //{ path: 'drag-drop', loadChildren: () => import('./pages/drag-drop/drag-drop.module').then(m => m.DragDropModule), data: { breadcrumb: 'Drag & Drop' } },
            //{ path: 'icons', loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsModule), data: { breadcrumb: 'Material Icons' } },
             { path: 'profile', loadChildren: () => import ('./pages/profile/profile.module').then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } }, 
            // { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            // { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            // { path: 'search/:name', component: SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'doctors', loadChildren: () => import('./pages/doctors/doctors.module').then(m => m.DoctorsModule), data: { breadcrumb: 'Doctors' } },
            { path: 'actionnaires', loadChildren: () => import('./pages/actionnaires/actionnaires.module').then(m => m.ActionnairesModule), data: { breadcrumb: 'Actionnaires' } },
            { path: 'Envoie-sms',canActivate:[activateSmsMessage], component: SmsSendComponent, data: { breadcrumb: 'Envoie Des SmS' } },
          
            { path: 'liste-sms', canActivate: [AuthActivateSMSGuard], component: SmstableComponent, data: { breadcrumb: 'SMS List' } },

        ]
    },
    //  { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    //{ path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
             preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
            relativeLinkResolution: 'legacy',
            // useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }