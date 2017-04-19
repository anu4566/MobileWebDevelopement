import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { Checklist } from './checklist';

@NgModule({
  declarations: [
    Checklist,
  ],
  imports: [
    IonicPageModule.forChild(Checklist),
  ],
  exports: [
    Checklist
  ]
})
export class ChecklistModule {}
