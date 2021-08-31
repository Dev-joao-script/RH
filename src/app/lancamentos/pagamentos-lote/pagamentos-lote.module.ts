import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentosLotePageRoutingModule } from './pagamentos-lote-routing.module';

import { PagamentosLotePage } from './pagamentos-lote.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    ReactiveFormsModule,
    PagamentosLotePageRoutingModule
  ],
  declarations: [PagamentosLotePage]
})
export class PagamentosLotePageModule {}
