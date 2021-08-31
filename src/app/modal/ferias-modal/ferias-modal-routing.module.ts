import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriasModalPage } from './ferias-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FeriasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeriasModalPageRoutingModule {}
