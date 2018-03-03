import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavBarService {
  
  private flag:boolean = false;
  private navBarOpen = new BehaviorSubject<boolean>(false);

  constructor() { }

  get isNavBarOpen(){
    return this.navBarOpen.asObservable();
  }

  toggleNavBar(){
    this.flag = !this.flag;    
    this.navBarOpen.next(this.flag);     
  }

}
