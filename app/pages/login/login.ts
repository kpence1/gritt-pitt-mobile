import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CreatePage} from '../create/create';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  constructor(private nav: NavController) {
  
  }
  GoToPage(){
    console.log("hit")
    this.nav.push(CreatePage);
  }
}


