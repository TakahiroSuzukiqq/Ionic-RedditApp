import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService{
    http: any;
    baseUrl: String;

    constructor(http: Http) {
        this.http = http;
        this.baseUrl = 'https://www.reddit.com/r';
    }

    getPosts(category, limit) {
         return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit).map(res => res.json());
    }

}


// memo 
//* about "map" japanese article : http://hfuji.hatenablog.jp/entry/2016/06/28/232820
