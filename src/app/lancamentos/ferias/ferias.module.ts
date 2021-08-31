import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriasPageRoutingModule } from './ferias-routing.module';

import { FeriasPage } from './ferias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeriasPageRoutingModule
  ],
  declarations: [FeriasPage]
})
export class FeriasPageModule {}
