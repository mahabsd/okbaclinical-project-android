import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actionnaire } from './actionnaires.model';

@Injectable()
export class ActionnairesService {
    public url = "api/actionnaires";
    constructor(public http:HttpClient) { }
    
    getActionnaires(): Observable<Actionnaire[]> {
        return this.http.get<Actionnaire[]>(this.url);
    }

    addActionnaire(actionnaire:Actionnaire){	    
        return this.http.post(this.url, actionnaire);
    }

    updateActionnaire(actionnaire:Actionnaire){
        return this.http.put(this.url, actionnaire);
    }

    deleteActionnaire(id: number) {
        return this.http.delete(this.url + "/" + id);
    } 
} 