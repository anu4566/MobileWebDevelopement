import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import {HomePage} from "../home/home";
import { Screenshot } from '@ionic-native/screenshot';
import { Printer, PrintOptions } from '@ionic-native/printer';

/**
 * Generated class for the Checklist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class Checklist {

public ccit:any;
  public cfcountry:any;
  public ctcountry:any;
  public val:any[];
  public a: any[];
  public b:any[];
  ourLog ="";
  public valtorecv:any[];
   checkedItems = {};
   responses: any;
  constructor(public screenshot: Screenshot, public navCtrl: NavController, public navParams: NavParams, public user:User, public auth:Auth) {
    this.ccit = navParams.get("cit");
    this.cfcountry = navParams.get("fromcountry");
    this.ctcountry = navParams.get("tocountry");
    this.val = navParams.get("value");
    this.a = navParams.get("canind");
    this.b =navParams.get("canusa");
    this.valtorecv =navParams.get("valsend");
    console.log("******************")
    console.log(this.ccit);
    console.log(this.cfcountry);
    console.log(this.ctcountry);
    console.log(this.val);
   console.log("valsend");
   console.log(this.valtorecv);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Checklist');
  }
  logout() {
    this.auth.logout();
    this.navCtrl.setRoot(HomePage);
  }
  checkForm()
  {

    console.log(this.checkedItems);
    this.user.set('checklist',this.checkedItems);
   this.responses = this.user.get('checklist',1);
   console.log(this.responses);
   this.user.save();
  }
  takeScreenShot()
  {
    console.log(this.screenshot);
    console.log(this.screenshot.save);
    this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(this.onSuccess, this.onError);



  }
  onSuccess(success){
    console.log(success);
  }
  onError(err){
    console.log(err);
  }
  }



