import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  congesUrl: string = environment.basUrl;
  constructor(private http: HttpClient) {
  }

  addconge(data) {
    return this.http.post(this.congesUrl + "conges/conge/add/", data );
  }
  getconge(id) {
    return this.http.get(this.congesUrl + "conges/conge/" + id,);
  }
  updateconge(id, data) {
    return this.http.put(this.congesUrl + "conges/conge/update/"+ id, data, );
  }
  deleteconge(id) {
    return this.http.delete(this.congesUrl + "conges/conge/delete/" + id, );
  }
  getAllconges() {
    return this.http.get(this.congesUrl + "conges/getAllconges");
  }


}
