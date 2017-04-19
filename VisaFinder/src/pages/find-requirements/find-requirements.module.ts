import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { FindRequirements } from './find-requirements';

@NgModule({
  declarations: [
    FindRequirements,
  ],
  imports: [
    IonicPageModule.forChild(FindRequirements),
  ],
  exports: [
    FindRequirements
  ]
})
export class FindRequirementsModule {}
