import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewFuncionariosModalPage } from './view-funcionarios-modal.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: ViewFuncionariosModalPage
    }])
  ],
  declarations: [ViewFuncionariosModalPage]
})
export class ViewFuncionariosModalPageModule {}
