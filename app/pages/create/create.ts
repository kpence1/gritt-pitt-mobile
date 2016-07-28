import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuestionPage} from '../question/question';
import {LoginPage} from '../login/login';



@Component({
  templateUrl: 'build/pages/create/create.html'
})
export class CreatePage {
  constructor(private nav: NavController) {
  
 }
  GoToQuestionPage(){
    this.nav.push(QuestionPage);
  }
}


