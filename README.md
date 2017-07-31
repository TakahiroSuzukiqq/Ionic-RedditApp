# Image  

  <a href="https://ibb.co/mzHw9k"><img src="https://image.ibb.co/hcwCh5/Screen_Shot_2017_07_30_at_01_33_29.png" alt="Screen_Shot_2017_07_30_at_01_33_29" border="0"></a>    
           
    
    
# Issues & Solution  
 * [Error: Uncaught (in promise): Error: No provider for Http!](https://forum.ionicframework.com/t/no-provider-for-http-error-in-ionic/85762/2)   
      
   ````  
   app.module.ts  
   import { BrowserModule } from '@angular/platform-browser';    
   import { HttpModule } from '@angular/http';  
   import { StatusBar } from '@ionic-native/status-bar';  
   ~~~~  
   imports: [   
    BrowserModule,   
    IonicModule.forRoot(MyApp),  
    HttpModule  
   ],    
   ~~~~  
    providers: [  
    StatusBar,  
    SplashScreen,  
    {provide: ErrorHandler, useClass: IonicErrorHandler}  
   ]  
   ````      
    
 * [Cordova is not available](https://github.com/ionic-team/ionic-native) or [Cordova is not available2](https://forum.ionicframework.com/t/debugging-startup-non-native-just-in-browser/50407/11)   
         
 * [Property 'subscribe' does not exist on type 'void'](https://stackoverflow.com/questions/37990993/property-subscribe-does-not-exist-on-type-void-angular-2-asp-net-core)  
    
   ````    
   getPosts(category, limit){  
    this.redditService.getPosts(category, limit).subscribe(response => {  
      return this.items = response.data.children;  
      });  
    }   
   ````     
       
    
    
# Ionic Docs  
 * [Installation](http://ionicframework.com/docs/intro/installation/)  
 * [Components & Styling](https://ionicframework.com/docs/components)  
  
# Reference  
 * This app is built with following [this YouTube tutorial](https://www.youtube.com/watch?v=ilM8YorL_jI&t=405s)  
   
     