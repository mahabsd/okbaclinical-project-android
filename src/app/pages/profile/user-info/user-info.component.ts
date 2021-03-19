import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public data: any;
  constructor(public UserService: UsersService,) {


  }

  ngOnInit() {

    let token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    this.UserService.getUser(JSON.parse(JSON.stringify(decoded))._id,).subscribe(res => {
      this.data = (res);
    })
  }
}





