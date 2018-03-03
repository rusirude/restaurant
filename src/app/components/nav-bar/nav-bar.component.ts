import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isMenuOpen$ : Observable<boolean>;
  //isMenuOpen$ : boolean;    
  constructor(private navBarService:NavBarService) { }

  ngOnInit() {     
    this.isMenuOpen$ = this.navBarService.isNavBarOpen;    
  }

}
