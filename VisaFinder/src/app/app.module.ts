import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Signup } from '../pages/signup/signup';
import { FindRequirements } from '../pages/find-requirements/find-requirements';
import { Checklist } from '../pages/checklist/checklist';
import { Welcome } from '../pages/welcome/welcome';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { HttpModule } from '@angular/http';
import { MyData } from '../providers/my-data';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '5ca4dcee'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Signup,
    FindRequirements,
    Checklist,
    Welcome


  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Signup,
    FindRequirements,
    Checklist,
    Welcome

  ],
  providers: [
    StatusBar,
    MyData,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
