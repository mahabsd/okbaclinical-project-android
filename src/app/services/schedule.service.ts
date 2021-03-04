import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
 
  constructor(private http: HttpClient) {
   
  }
 
  ScheduleUrl: string = environment.basUrl;
 
  addSchedule(data) {
    return this.http.post(this.ScheduleUrl + "rendezvous/rendezVous/add", data );
  }
  getSchedule(id) {
    return this.http.get(this.ScheduleUrl + "rendezvous/rendezVous" + id,);
  }
  updateSchedule(id, data) {
    return this.http.put(this.ScheduleUrl + "rendezvous/rendezVous/update/"+ id, data, );
  }
  deleteSchedule(id) {
    return this.http.delete(this.ScheduleUrl + "rendezvous/rendezVous/delete/" + id, );
  }
  getAllSchedules() {
    return this.http.get(this.ScheduleUrl + "rendezvous/getAllRendezVous",  );
  }
}
