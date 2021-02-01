import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaintenancesService {
 
  constructor(private http: HttpClient) {
   
  }
 
  MaintenanceUrl: string = environment.basUrl;
 
  addMaintenance(data) {
    console.log(data);
    return this.http.post(this.MaintenanceUrl + "maintenances/maintenance/add", data );
  }
  getMaintenance(id) {
    return this.http.get(this.MaintenanceUrl + "maintenances/maintenance" + id,);
  }
  updateMaintenance(id, data) {
    return this.http.put(this.MaintenanceUrl + "maintenances/maintenance/update/"+ id, data, );
  }
  deleteMaintenance(id) {
    return this.http.delete(this.MaintenanceUrl + "maintenances/maintenance/delete/" + id, );
  }
  getAllMaintenances() {
    return this.http.get(this.MaintenanceUrl + "maintenances/getAllmaintenances",  );
  }
}
