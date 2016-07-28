import {Component} from '@angular/core';
import {AdminPage} from '../admin/admin';
import {ClientsPage} from '../clients/clients';
import {WorkoutsPage} from '../workouts/workouts';
import {SchedulePage} from '../schedule/schedule';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = AdminPage;
    this.tab2Root = ClientsPage;
    this.tab3Root = SchedulePage;
    this.tab4Root = WorkoutsPage;
  }
}
