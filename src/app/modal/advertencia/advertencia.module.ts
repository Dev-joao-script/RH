import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertenciaPageRoutingModule } from './advertencia-routing.module';

import { AdvertenciaPage } from './advertencia.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: AdvertenciaPage
    }])
  ],
  declarations: [AdvertenciaPage]
})
export class AdvertenciaPageModule {}
