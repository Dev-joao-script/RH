import { BrMaskerModule } from 'br-mask';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PagamentosPageRoutingModule } from './pagamentos-routing.module';
import { PagamentosPage } from './pagamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PagamentosPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [PagamentosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PagamentosPageModule {}
