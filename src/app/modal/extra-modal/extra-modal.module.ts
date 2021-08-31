import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtraModalPageRoutingModule } from './extra-modal-routing.module';

import { ExtraModalPage } from './extra-modal.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: ExtraModalPage
    }])
  ],
  declarations: [ExtraModalPage]
})
export class ExtraModalPageModule {}
