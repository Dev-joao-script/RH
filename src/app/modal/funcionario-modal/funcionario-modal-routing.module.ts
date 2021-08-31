import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionarioModalPage } from './funcionario-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionarioModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionarioModalPageRoutingModule {}
