import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  constructor(private router:Router) { }

  login(username:String,password:String){
    if (username !== '' && password != '' ) { 
      this.loggedIn.next(true);
      this.router.navigate(['/dashboard']);
    }
  }

  logout() {                            
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

}
