import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedMenu = this.headerService.isLogged;

  constructor(private headerService: HeaderService) {}
  ngOnInit() {    
  }

  openNavMenu(){
    
  }
}
