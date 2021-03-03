import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from "../../../node_modules/jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class GuardserviceService {
  isLoginSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
decoded: any;


  constructor() { }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }
  public getToken(): string {
    return localStorage.getItem('token');
  }


  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token === null) {
      return false;
    } else {
      return true;
    }

  }
  public isNotAllowed(): boolean {
    let token = localStorage.getItem('token');
    this.decoded = JSON.parse(JSON.stringify(jwt_decode(token)));
    

    if (this.decoded.roles[0].name === 'admin' 
    || this.decoded.roles[0].name === 'Pdg' 
    || this.decoded.roles[0].name === 'Responsable-info' 
    || this.decoded.roles[0].name === 'responsable-RH') {
      return true;
    } else {
      return false;
    }

  }
  public isAllowedrequestlist(): boolean {
    let token = localStorage.getItem('token');
    this.decoded = JSON.parse(JSON.stringify(jwt_decode(token)));
    

    if (this.decoded.roles[0].name === 'admin' 
    || this.decoded.roles[0].name === 'Pdg' 
    || this.decoded.roles[0].name === 'Responsable-info' 
    || this.decoded.roles[0].name === 'responsable-RH'
    || this.decoded.roles[0].name === 'directeur-technique'
    || this.decoded.roles[0].name === 'surveillant Générale'
    || this.decoded.roles[0].name === 'responsable facturation'
    || this.decoded.roles[0].name === 'Respnsable Pharmacie'
    || this.decoded.roles[0].name === 'respon-financier'
    || this.decoded.roles[0].name === 'gouvernantes'
    || this.decoded.roles[0].name === 'hyginiste'
    || this.decoded.roles[0].name === 'respon-maintenance') {
      return true;
    } else {
      return false;
    }

  }
  public isAllowedsmsmessage(): boolean {
    let token = localStorage.getItem('token');
    this.decoded = JSON.parse(JSON.stringify(jwt_decode(token)));
    

    if (this.decoded.roles[0].name === 'admin' 
    || this.decoded.roles[0].name === 'Pdg' 
    || this.decoded.roles[0].name === 'Responsable-info' 
    || this.decoded.roles[0].name === 'cassier-principale'
    ) {
      return true;
    } else {
      return false;
    }

  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  public isAllowed(): boolean {

    const token = localStorage.getItem('token');
    this.decoded = JSON.parse(JSON.stringify(jwt_decode(token)))

    if ((this.decoded.roles[0].name === 'admin')
      || (this.decoded.roles[0].name === 'pdg')
      || (this.decoded.roles[0].name === 'cassiers principale')) {
      return true;
    } else {
      return false;
    }
  }
  public isAllowedActs(): boolean {

    const token = localStorage.getItem('token');
    this.decoded = JSON.parse(JSON.stringify(jwt_decode(token)))

    if ((this.decoded.roles[0].name === 'admin')
      || (this.decoded.roles[0].name === 'pdg')
      || (this.decoded.roles[0].name === 'secritaire personnelle')) {
      return true;
    } else {
      return false;
    }
  }
  public isAllowedSMS(): boolean {

    const token = localStorage.getItem('token');
    this.decoded = JSON.parse(JSON.stringify(jwt_decode(token)))

    if ((this.decoded.roles[0].name === 'admin')
      || (this.decoded.roles[0].name === 'pdg')
      || (this.decoded.roles[0].name === 'Responsable-info')) {
      return true;
    } else {
      return false;
    }
  }

  public isAllowedHolidays(): boolean {

    const token = localStorage.getItem('token');
    this.decoded = JSON.parse(JSON.stringify(jwt_decode(token)))

    if ((this.decoded.roles[0].name === 'services')
      || (this.decoded.roles[0].name === 'cassiers principale')) {
      return false;
    } else {
      return true;
    }
  }
  public isAllowedMaintenance(): boolean {

    const token = localStorage.getItem('token');
    this.decoded = JSON.parse(JSON.stringify(jwt_decode(token)))

    if ((this.decoded.roles[0].name === 'Responsable-info')
      || (this.decoded.roles[0].name === 'respon-maintenance')
      || (this.decoded.roles[0].name === 'admin')
      || (this.decoded.roles[0].name === 'pdg')) {
      return true;
    } else {
      return false;
    }
  }
}