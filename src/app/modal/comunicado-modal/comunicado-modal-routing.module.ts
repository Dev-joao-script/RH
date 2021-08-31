import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicadoModalPage } from './comunicado-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicadoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicadoModalPageRoutingModule {}
