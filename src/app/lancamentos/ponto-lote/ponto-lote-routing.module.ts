import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontoLotePage } from './ponto-lote.page';

const routes: Routes = [
  {
    path: '',
    component: PontoLotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontoLotePageRoutingModule {}
