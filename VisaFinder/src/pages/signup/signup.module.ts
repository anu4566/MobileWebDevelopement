import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { Signup } from './signup';

@NgModule({
  declarations: [
    Signup,
  ],
  imports: [
    IonicPageModule.forChild(Signup),
  ],
  exports: [
    Signup
  ]
})
export class SignupModule {}
