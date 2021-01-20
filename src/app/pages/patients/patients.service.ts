import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient.model';

@Injectable()
export class PatientsService {
    public url = "api/patients";
    constructor(public http:HttpClient) { }
    
    getPatients(): Observable<Patient[]> {
        return this.http.get<Patient[]>(this.url);
    }

    addPatient(patient:Patient){	    
        return this.http.post(this.url, patient);
    }

    updatePatient(patient:Patient){
        return this.http.put(this.url, patient);
    }

    deletePatient(id: number) {
        return this.http.delete(this.url + "/" + id);
    } 
} 