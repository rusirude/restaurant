import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string = "";
  private password: string = ""; 

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onLogIn() {  
      
    this.loginService.login(this.username, this.password);
  }

}
