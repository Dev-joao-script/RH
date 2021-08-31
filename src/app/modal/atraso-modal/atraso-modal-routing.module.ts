import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtrasoModalPage } from './atraso-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AtrasoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtrasoModalPageRoutingModule {}
