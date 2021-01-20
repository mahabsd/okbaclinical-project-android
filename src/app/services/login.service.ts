import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersUrl: string = environment.basUrl;
  constructor(private http: HttpClient) {
  }

  loginUser(data) {
    return this.http.post(this.usersUrl + "users/user/login/", data);
  }
 
}
