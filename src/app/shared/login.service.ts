import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import {  Response } from "@angular/http";
import { Observable } from 'rxjs';
import { Data, LoginModel } from './data.model';
import 'rxjs/Rx';
import { letProto } from 'rxjs/operator/let';

@Injectable()
export class LoginService { ///This service is for both signup and login 
  constructor(
    private http: Http,
    private _http: HttpClient
  ) { }

  registerUser(data): Observable<Data> {

    let bodyData: Data = {
      email: data.emailData,
      ConfirmEmail: data.confirmEmail,
      PasswordData: data.passwordData,
      ConfirmPassword: data.confirmPassword
    }
    let body = JSON.stringify(bodyData);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/signup', body, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.fields || {};
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  getUserById(emailId: string): Observable<any[]> {
    let url : string = 'http://localhost:8000/api/signup?email='+emailId;
    return this._http.get<any[]>(url)
      .do(data => console.log(JSON.stringify(data))) 
     .catch(this.handleErrorObservable);
  }
}