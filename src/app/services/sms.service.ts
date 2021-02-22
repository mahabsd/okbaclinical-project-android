import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  usersUrl: string = environment.basUrl;
  constructor(private http: HttpClient) {
  }

  
  SendSms(lang, phone, message ) {
    return this.http.get(this.usersUrl + "smsing/smssend/"+lang+"/"+phone+"/"+message);
  }

  addSms(data) {
    return this.http.post(this.usersUrl + "smsing/sms/add/", data );
  }
  getSms(id) {
    return this.http.get(this.usersUrl + "smsing/sms/" + id,);
  }
  updateSms(id, data) {
    return this.http.put(this.usersUrl + "smsing/sms/update/"+ id, data, );
  }
  deleteSms(id) {
    return this.http.delete(this.usersUrl + "smsing/sms/delete/" + id, );
  }
  getAllSmss() {
    return this.http.get(this.usersUrl + "smsing/getAllsmss");
  }
 
}