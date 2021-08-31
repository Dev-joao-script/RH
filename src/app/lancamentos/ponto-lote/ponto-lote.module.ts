import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontoLotePageRoutingModule } from './ponto-lote-routing.module';

import { PontoLotePage } from './ponto-lote.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    ReactiveFormsModule,
    PontoLotePageRoutingModule
  ],
  declarations: [PontoLotePage]
})
export class PontoLotePageModule {}
