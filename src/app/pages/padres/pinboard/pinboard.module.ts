import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinboardPageRoutingModule } from './pinboard-routing.module';

import { PinboardPage } from './pinboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinboardPageRoutingModule
  ],
  declarations: [PinboardPage]
})
export class PinboardPageModule {}
