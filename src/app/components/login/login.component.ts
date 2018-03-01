import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string = "";
  private password: string = "";

  @Output() headerFlag = new EventEmitter();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  logingUser() {    
    this.authService.login(this.username, this.password);
  }

}
