import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../shared/login.service';
import { LoginModel, Data } from '../shared/data.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  data: LoginModel;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public passcode: string;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(formValues?: NgForm) {
    if (formValues != null)
      formValues.reset();
    this.data = {
      email: '',
      PasswordData: ''
    }
  }
  OnSubmit(formValues) {

    this.loginService.getUserById(formValues.emailData)
      .subscribe((data) => {
        this.passcode = data[0].PasswordData;
      })
    // let url : string = 'http://localhost:8000/api/signup?email='+formValues.emailData;
    // this._http.get<any>(url).subscribe(data =>{
    //   this.passcode = data[0].PasswordData;
    // });
    if (this.passcode === formValues.passwordData) {
      this.router.navigate(['/dashboard']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
  facebookAPI() {

  }

  googleAPI() {

  }
}