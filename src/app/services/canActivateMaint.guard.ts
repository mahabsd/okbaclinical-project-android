import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { GuardserviceService } from './guardservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthActivateMaintGuard {
  constructor(public auth: GuardserviceService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAllowedMaintenance()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
  
}