import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../shared/login.service';
import { Data } from '../shared/data.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   public data: Data;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";//RegEx
  constructor(
    private loginService: LoginService,
    private router : Router,
  ) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(formValues?: NgForm) {
    if (formValues != null)
    formValues.reset();
    this.data = {
      email: '',
      ConfirmEmail: '',
      PasswordData: '',
      ConfirmPassword: ''
    }
  }
  OnSubmit(formValues) {
    this.loginService.registerUser(formValues)
      .subscribe(
        data => console.log('Success: ', data),
        err =>  console.log('error: ', err)
      );
      this.router.navigate(['/dashboard']);
  }
  facebookAPI() {

  }

  googleAPI() {
    
  }
}
