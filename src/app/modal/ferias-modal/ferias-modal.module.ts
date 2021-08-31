import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriasModalPageRoutingModule } from './ferias-modal-routing.module';

import { FeriasModalPage } from './ferias-modal.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: FeriasModalPage
    }])
  ],
  declarations: [FeriasModalPage]
})
export class FeriasModalPageModule {}
