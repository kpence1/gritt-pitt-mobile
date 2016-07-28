import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuestionPage} from '../question/question';

@Component({
  templateUrl: 'build/pages/questions/questions.html'
})
export class QuestionsPage {
  constructor(private nav: NavController) {
  
  }
  GoToQuestionsPage(){
    this.nav.push(QuestionsPage);
  }
}
