import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from 'src/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApiLogin: string = "/api/login";
  urlApiCreateAccount: string = "/api/createAccount";
  urlApiUpdateAccount: string = "/api/updateAccount";
  urlApiInfos: string = "/api/infos";

  constructor(private http: HttpClient) { }

  public postLogin(username: string, password: string) : Observable<User> {
    let dataArgs: string = "username=" + username + "&password=" + password;
    let httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})
    };
    return this.http.post<User>(this.urlApiLogin, dataArgs, httpOptions);
  }

  public postCreateAccount(username: string, firstname: string, lastname:string, password: string) : Observable<User> {
    let dataArgs: string = "username=" + username +
                          "&password=" + password + 
                          "&firstname=" + firstname + 
                          "&lastname=" + lastname;
    let httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})
    };
    return this.http.post<User>(this.urlApiCreateAccount, dataArgs, httpOptions);
  }

  public postUpdateAccount(firstname: string, lastname:string, password: string,
                            email: string, phone: string, sex: string) : Observable<User> {
    let dataArgs: string = "password=" + password + 
                          "&firstname=" + firstname + 
                          "&lastname=" + lastname +
                          "&email=" + email +
                          "&sex=" + sex +
                          "&phone=" + phone;
    console.log(dataArgs);
    let httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})
    };
    return this.http.post<User>(this.urlApiUpdateAccount, dataArgs, httpOptions);
  }

  public getClientInfos() : Observable<User> {
    let httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})
    };
    return this.http.get<User>(this.urlApiInfos, httpOptions);
  }
}