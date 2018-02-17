import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

  isLogged:boolean = false;
  
  constructor() { }

  setIsLogged(value){
    this.isLogged = value;
  }
  getIsLogged(){
    return this.isLogged;
  }

}
