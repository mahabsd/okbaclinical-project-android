import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { GuardserviceService } from 'src/app/services/guardservice.service';
import { LoginService } from 'src/app/services/login.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  public form:FormGroup;
  public settings: Settings;
  response;
  constructor(private formService: LoginService, private router: Router){     }
 
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    
    })
  }
  public onSubmit(values:Object):void {
    console.log(this.form.value);
    this.formService.loginUser(this.form.value).subscribe((res) => {
      // console.log("Logged in!" + JSON.stringify(res));
      this.response = res
      

      
      console.log(this.response.token);
      console.log(this.response);
      this.response.user.token = this.response.token;
      localStorage.setItem('token', this.response.user.token );
      this.router.navigate(['/']);
    })
      
    
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.settings.loadingSpinner = false; 
    }); 
  }
}