import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JustificativasPage } from './justificativas.page';

const routes: Routes = [
  {
    path: '',
    component: JustificativasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustificativasPageRoutingModule {}
