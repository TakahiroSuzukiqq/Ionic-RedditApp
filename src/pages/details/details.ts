import { Component } from '@angular/core';
import { NavController, Navparams } from 'ionic-angular';

@Component({

  templateUrl: 'details.html'   //delete above 'details' selector or use 'pages-details' as a selector
})
export class DetailsPage {
    item: any;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.item = params.get('item');
  }

}
