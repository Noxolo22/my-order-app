import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllmenuPageRoutingModule } from './allmenu-routing.module';

import { AllmenuPage } from "./AllmenuPage";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllmenuPageRoutingModule
  ],
  declarations: [AllmenuPage]
})
export class AllmenuPageModule {}
