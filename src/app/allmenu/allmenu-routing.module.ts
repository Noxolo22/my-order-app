import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllmenuPage } from "./AllmenuPage";

const routes: Routes = [
  {
    path: '',
    component: AllmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllmenuPageRoutingModule {}
