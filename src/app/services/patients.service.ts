import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
 
  constructor(private http: HttpClient) {
   
  }
 
  patientsUrl: string = environment.basUrl;
 
  addPatient(data) {
    console.log(data);
    return this.http.post(this.patientsUrl + "patients/patient/add", data );
  }
  getPatient(id) {
    return this.http.get(this.patientsUrl + "patients/patient" + id,);
  }
  updatePatient(id, data) {
    return this.http.put(this.patientsUrl + "patients/patient/update"+ id, data, );
  }
  deletePatient(id) {
    return this.http.delete(this.patientsUrl + "patients/patient/delete" + id, );
  }
  getAllPatients() {
    return this.http.get(this.patientsUrl + "patients/getAllpatients",  );
  }
}
