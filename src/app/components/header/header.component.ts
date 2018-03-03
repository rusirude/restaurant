import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  @Output() navToggle = new EventEmitter<boolean>();
  

  constructor(private authService: AuthService, private navBarService:NavBarService ) { }
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout(){
    this.authService.logout(); 
  }

  onMenuOpen(){
    this.navToggle.emit(true);
  }

}
