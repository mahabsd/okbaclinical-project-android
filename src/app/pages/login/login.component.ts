import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  public form: FormGroup;
  public settings: Settings;
  response;
  loginUser;
  constructor(public appSettings:AppSettings, private formService: LoginService, private router: Router) { 
    this.settings = this.appSettings.settings; 
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    })

  }

  ngOnInit(): void {
    this.loginUser = new FormGroup({
      password: new FormControl('', [Validators.required]),
      contacts: new FormGroup({
        email: new FormControl('', [Validators.required]),
      }),

    })
  }
  public onSubmit(values: Object): void {
    // console.log(this.form.value);
    this.loginUser.setValue({
      password: this.form.value.password,
      contacts: { email: this.form.value.email }
    })
    this.formService.loginUser(this.form.value).subscribe((res) => {
      console.log(res);
      this.response = res
      console.log(this.response);
      localStorage.setItem('token', this.response.token);
      this.router.navigate(['/']);
    })

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    });
  }
}