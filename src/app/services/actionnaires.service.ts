import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActionnairesService {
 
  constructor(private http: HttpClient) {
   
  }
 
  actionnairesUrl: string = environment.basUrl;
 
  addActionnaire(data) {
    console.log(data);
    return this.http.post(this.actionnairesUrl + "actionnaires/actionnaire/add", data );
  }
  getActionnaire(id) {
    return this.http.get(this.actionnairesUrl + "actionnaires/actionnaire" + id,);
  }
  updateActionnaire(id, data) {
    return this.http.put(this.actionnairesUrl + "actionnaires/actionnaire/update/"+ id, data, );
  }
  deleteActionnaire(id) {
    return this.http.delete(this.actionnairesUrl + "actionnaires/actionnaire/delete/" + id, );
  }
  getAllActionnaires() {
    return this.http.get(this.actionnairesUrl + "actionnaires/getAllactionnaires",  );
  }
}
