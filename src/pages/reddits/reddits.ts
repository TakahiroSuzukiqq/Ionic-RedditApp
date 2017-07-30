import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;      //set category as property
  category: any;  
  limit: any;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();

  }

  ngOnInit() {  //lifecycle hook
    // console.log('onInit ran...');
    //this.getPosts('sports', 10);
    this.getPosts(this.category, this.limit);   //the default category is sport, display llimit is 10
  }

  getDefaults() {
    this.category = 'sports';
    this.limit = 10;
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(response => {
      console.log(response);
    this.items = response.data.children;    //get "children" data from fetched reddit data
    });
  }

  viewItem(item) {  //to switch pages, this viewItem is for navCtrl
    this.navCtrl.push(DetailsPage, {     //push = go to the DetailsPage when the button is clicked
      item: item                         //pass the item param
    });
  }
  
  changeCategory() {
    this.getPosts(this.category, this.limit); 
  }

}

//memo
//what is "lifecycle hook"japanese article : http://blog.yuhiisk.com/archive/2016/05/02/angular2-lifecycle-hooks.html