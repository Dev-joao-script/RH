import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SegurancaPageRoutingModule } from './seguranca-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SegurancaPage } from './seguranca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    SegurancaPageRoutingModule
  ],
  declarations: [SegurancaPage]
})
export class SegurancaPageModule {}
