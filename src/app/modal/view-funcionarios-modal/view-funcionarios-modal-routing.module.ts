import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFuncionariosModalPage } from './view-funcionarios-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewFuncionariosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewFuncionariosModalPageRoutingModule {}
