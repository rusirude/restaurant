import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Http,RequestOptions,Headers} from '@angular/http';

import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  private token:String;
  private refrshToken:String;

  constructor(private router:Router,private http:Http) { }

  obtainAccessToken(username:string,password:string){
    let params = new URLSearchParams();
    params.append('username',username);
    params.append('password',password);    
    params.append('grant_type','password');
    params.append('client_id','mobile_api_client');
    params.append('scope','read');
    params.append('auth_type','mobile');
    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});    
    let options = new RequestOptions({headers: headers});       
    this.http.post('http://localhost:8889/oauth/token', params.toString(), options)
      .map(res => res.json())
      .subscribe(
        data => this.login(data),
        err => alert('Invalid Credentials')); 
  }
  login(data){
    this.saveToken(data);
    this.router.navigate(['/dashboard']);
  }

  saveToken(token){   
    this.token = token.access_token;    
  }

  checkCredentials() {
    let isLogged = false;
    if(this.token){
      isLogged = true;
    }
    return isLogged;    
  }
 
  logout() {
    this.token = '';
    this.router.navigate(['/']);
  }

  checktoken(){
    return this.token;
  }

}
