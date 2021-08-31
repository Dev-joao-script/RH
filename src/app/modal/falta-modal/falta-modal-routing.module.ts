import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaltaModalPage } from './falta-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FaltaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaltaModalPageRoutingModule {}
