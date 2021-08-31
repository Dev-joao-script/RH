import { FuncionariosPage } from './../../funcionarios/funcionarios.page';
import { FuncionarioModalPage } from './../funcionario-modal/funcionario-modal.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotoPageRoutingModule } from './foto-routing.module';

import { FotoPage } from './foto.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: FotoPage
    }])
  ],
  declarations: [FotoPage],
})
export class FotoPageModule {}
