import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConcluidosPage } from './concluidos.page';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConcluidosPage
      }
      ])
  ],
  declarations: [ConcluidosPage]
})
export class ConcluidosPageModule {}
