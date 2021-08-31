import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionarioModalPageRoutingModule } from './funcionario-modal-routing.module';

import { FuncionarioModalPage } from './funcionario-modal.page';
import { RouterModule } from '@angular/router';
import { BrMaskerModule } from 'br-mask';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    RouterModule.forChild([{
      path: '',
      component: FuncionarioModalPage
    }])
  ],
  declarations: [FuncionarioModalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FuncionarioModalPageModule {}
