import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public dataSource: any;
  public data: any;
  constructor( public UserService: UsersService, ) {
   
    
   }

  ngOnInit() {
    let token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    console.log(decoded);
     this.UserService.getUser(JSON.parse(JSON.stringify(decoded))._id,).subscribe(res => {
      
      this.dataSource=(res);
      
         this.data=this.dataSource;
         console.log(this.data.profile.gender);
         
         
         
   
     })
  }

}
