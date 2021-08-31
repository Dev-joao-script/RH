import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertenciaPage } from './advertencia.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertenciaPageRoutingModule {}
