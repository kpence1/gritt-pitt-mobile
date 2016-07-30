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
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

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

ionicBootstrap(MyApp, [
    FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyB5P2A1S2q3v9U2IPRN6G-qT8ca2Edb4Z8",
      authDomain: "grittpitt-722d0.firebaseapp.com",
      databaseURL: "https://grittpitt-722d0.firebaseio.com",
      storageBucket: "grittpitt-722d0.appspot.com",
  }),
]);

