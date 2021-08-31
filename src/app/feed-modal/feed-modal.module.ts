import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedModalPageRoutingModule } from './feed-modal-routing.module';

import { FeedModalPage } from './feed-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: FeedModalPage
    }])
  ],
  declarations: [FeedModalPage]
})
export class FeedModalPageModule {}
