import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CreatePage} from '../create/create';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  constructor(private nav: NavController) {
  
  }
  GoToPage(){
    this.nav.push(TabsPage);
  }
}


