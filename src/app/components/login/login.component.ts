import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string = "";
  private password: string = "";

  @Output() headerFlag = new EventEmitter();

  constructor(private router: Router, private logingService: LoginService) { }

  ngOnInit() {
  }

  logingUser() {    
    this.logingService.obtainAccessToken(this.username, this.password);
  }

}
