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