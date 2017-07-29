import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  constructor(public navCtrl: NavController, private redditService: RedditService) {

  }

  ngOnInit() {  //lifecycle hook
    // console.log('onInit ran...');
    this.getPosts('sports', 5);
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(response => {
      console.log(response);
    });
    
  }
}

//memo
//what is "lifecycle hook"japanese article : http://blog.yuhiisk.com/archive/2016/05/02/angular2-lifecycle-hooks.html