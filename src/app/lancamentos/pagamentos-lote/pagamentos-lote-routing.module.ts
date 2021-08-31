import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentosLotePage } from './pagamentos-lote.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentosLotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentosLotePageRoutingModule {}
