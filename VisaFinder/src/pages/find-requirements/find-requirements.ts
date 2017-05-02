import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import {HomePage} from "../home/home";
import {Checklist} from "../checklist/checklist";
import { MyData } from "../../providers/my-data";
/**
 *
 * Generated class for the FindRequirements page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-find-requirements',
  templateUrl: 'find-requirements.html',
})
export class FindRequirements {
  data: any[];
  error: any;
  FCountry:String;
  TCountry:String;
  citizen:String;
  ci:any[];
  cu:any[];
  ic:any[];
  iu:any[];
  uc:any[];
  ui:any[];
  valtosend:any[];
  constructor(public navCtrl: NavController, public myProvider: MyData, public navParams: NavParams,  public user:User, public auth:Auth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindRequirements');
  }
  logout() {
    this.auth.logout();
    this.navCtrl.setRoot(HomePage);
  }

  showChecklist()
  {
    this.myProvider.getMyData().then((myProvider) =>{
      this.getDetails(myProvider);
    });




  }

  getDetails(data)
  {
    console.log("----------------------");
    console.log(data);
    console.log(data.country);
    this.ci = data.country.Canada.India;
    console.log(this.ci);
    this.cu = data.country.Canada.USA;
    console.log(this.cu);
    this.ic = data.country.India.Canada;
    this.iu = data.country.India.USA;
    this.uc = data.country.USA.Canada;
    this.ui = data.country.USA.India;

    if(this.FCountry== "Canada" && this.TCountry =="India")
    {
      this.valtosend = this.ci;

    }
    else if(this.FCountry== "Canada" && this.TCountry =="USA")
    {
      this.valtosend = this.cu;
    }
    else if(this.FCountry== "India" && this.TCountry =="Canada")
    {
      this.valtosend = this.ic;
    }
    else if(this.FCountry== "India" && this.TCountry =="USA")
    {
      this.valtosend = this.iu;
    }
    else if(this.FCountry== "USA" && this.TCountry =="Canada")
    {
      this.valtosend = this.uc;
    }
    else if(this.FCountry== "USA" && this.TCountry =="India")
    {
      this.valtosend = this.ui;
    }
    else {
      this.valtosend =['Origin country and destination country cannot be same',''];
    }


    this.navCtrl.push(Checklist,{

      value: this.data,
      fromcountry:this.FCountry,
      tocountry:this.TCountry,
      cit:this.citizen,
      valsend:this.valtosend,

    });


  }
}
