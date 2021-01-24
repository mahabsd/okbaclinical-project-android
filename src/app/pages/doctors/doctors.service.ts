import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class DoctorsService {
    doctorsUrl: string = environment.basUrl;
    constructor(public http:HttpClient) { }
    
    addDoctor(data) {
        //console.log(data);
        return this.http.post(this.doctorsUrl + "doctors/doctor/add/", data );
      }
      getDoctor(id) {
        return this.http.get(this.doctorsUrl + "doctors/doctor/" + id,);
      }
      updateDoctor(id, data) {
        return this.http.put(this.doctorsUrl + "doctors/doctor/update/"+ id, data, );
      }
      deleteDoctor(id) {
        return this.http.delete(this.doctorsUrl + "doctors/doctor/delete/" + id, );
      }
      getAllDoctors() {
        return this.http.get(this.doctorsUrl + "users/getAllusers");
      }
    }