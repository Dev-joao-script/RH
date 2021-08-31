import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicadoModalPageRoutingModule } from './comunicado-modal-routing.module';

import { ComunicadoModalPage } from './comunicado-modal.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicadoModalPageRoutingModule,
    RouterModule.forChild([{
      path: '',
      component: ComunicadoModalPage
    }])
  ],
  declarations: []
})
export class ComunicadoModalPageModule {}
