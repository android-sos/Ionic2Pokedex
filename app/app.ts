import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {

  constructor(platform: Platform) {
    if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) && 
      (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
      this.rootPage = LoginPage;
    } else {
     // this.root = HomePage;
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
