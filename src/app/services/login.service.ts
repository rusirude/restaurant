import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {

  constructor(private router: Router,private authService:AuthService) { }

  login(username:string,password:string){
    this.authService.login(username,password);    
  }

}
