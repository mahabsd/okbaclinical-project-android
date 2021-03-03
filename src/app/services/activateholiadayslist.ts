import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { GuardserviceService } from './guardservice.service';

@Injectable({
  providedIn: 'root'
})
export class activateholiadayslist {
  constructor(public auth: GuardserviceService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAllowedrequestlist()) {
      this.router.navigate(['']);
      
      return false;
    }
    return true;
  }
  
}