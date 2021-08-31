import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriasPage } from './ferias.page';

const routes: Routes = [
  {
    path: '',
    component: FeriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeriasPageRoutingModule {}
