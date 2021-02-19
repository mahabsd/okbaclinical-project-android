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
    return this.http.post(this.usersUrl + "users/login/", data);
  }

  addUser(data) {
    //console.log(data);
    return this.http.post(this.usersUrl + "users/user/add/", data );
  }
  getUser(id) {
    return this.http.get(this.usersUrl + "users/user/" + id,);
  }
  updateUser(id, data) {
    return this.http.put(this.usersUrl + "users/user/update/"+ id, data );
  }
  deleteUser(id) {
    return this.http.delete(this.usersUrl + "users/user/delete/" + id, );
  }
  getAllUsers() {
    return this.http.get(this.usersUrl + "users/getAllusers");
  }
  getAllRoles() {
    return this.http.get(this.usersUrl + "users/getAllRoles");
  }
  updateUserConge(id, data) {
    return this.http.put(this.usersUrl + "users/user/updateConge/"+ id, data );
  }
  // postImage(data){
  //   return this.http.post(this.usersUrl + "users/user/add/", data );
  // }
}
