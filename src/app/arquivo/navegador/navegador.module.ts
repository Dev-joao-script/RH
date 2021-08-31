import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { NavegadorPageRoutingModule } from './navegador-routing.module';

import { NavegadorPage } from './navegador.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavegadorPage
      }
      ])
  ],
  declarations: [NavegadorPage]
})
export class NavegadorPageModule {}
