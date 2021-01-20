import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor.model';

@Injectable()
export class DoctorsService {
    public url = "api/users";
    constructor(public http:HttpClient) { }
    
    getDoctors(): Observable<Doctor[]> {
        return this.http.get<Doctor[]>(this.url);
    }

    addDoctor(user:Doctor){	    
        return this.http.post(this.url, user);
    }

    updateDoctor(user:Doctor){
        return this.http.put(this.url, user);
    }

    deleteDoctor(id: number) {
        return this.http.delete(this.url + "/" + id);
    } 
} 