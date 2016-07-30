import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
import {CreatePage} from './pages/create/create';
import {QuestionPage} from './pages/question/question';
import {QuestionsPage} from './pages/questions/questions';
import {AdminPage} from './pages/admin/admin';
import {SchedulePage} from './pages/schedule/schedule';
import {ClientsPage} from './pages/clients/clients';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
