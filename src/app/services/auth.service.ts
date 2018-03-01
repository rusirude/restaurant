import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import {Http,RequestOptions,Headers} from '@angular/http';

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private token:String;
  private refrshToken:String;

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  constructor(private router:Router,private http:Http) { }

  private saveToken(token){   
    this.token = token.access_token;  
    this.loggedIn.next(true);
    this.router.navigate(['/dashboard']);
  }

  private obtainAccessToken(username:string,password:string){
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
        data => this.saveToken(data),                 
        err => this.loggedIn.next(false)); 
  }

  login(username:string,password:string){
    if (username !== '' && password != '' ) { 
      this.obtainAccessToken(username,password);      
    }
  }

  logout() {                            
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }



}
