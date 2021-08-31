import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JustificativasPage } from './justificativas.page';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: JustificativasPage
      }
      ])
  ],
  declarations: [JustificativasPage]
})
export class JustificativasPageModule {}
