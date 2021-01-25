import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialsPage } from './specials.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialsPageRoutingModule {}
