import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuardserviceService  {
 isLoginSubject = new BehaviorSubject<boolean>(this.isAuthenticated());


  constructor() { }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }


 
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token === null) {
      return false;
    } else {
      return true;
    }

  }
  
  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
   }

}