import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuestionPage} from '../question/question';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/questions/questions.html'
})
export class QuestionsPage {
  constructor(private nav: NavController) {
  
  }
  GoToLoginPage(){
    this.nav.push(LoginPage);
  }
}
