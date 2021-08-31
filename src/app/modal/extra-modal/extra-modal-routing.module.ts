import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraModalPage } from './extra-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ExtraModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraModalPageRoutingModule {}
