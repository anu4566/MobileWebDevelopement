import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import {HomePage} from "../home/home";
/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {

  constructor(public navCtrl: NavController, public navParams: NavParams, public user:User, public auth:Auth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }
  logout() {
    this.auth.logout();
    this.navCtrl.setRoot(HomePage);
  }


}
