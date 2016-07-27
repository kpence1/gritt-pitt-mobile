import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CreatePage} from '../create/create';

@Component({
  templateUrl: 'build/pages/question/question.html'
})
export class QuestionPage {
  constructor(private nav: NavController) {
  
  }
}
