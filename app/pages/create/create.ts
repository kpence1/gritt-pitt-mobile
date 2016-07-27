import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {QuestionPage} from '../question/question';



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


