import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesMDPageRoutingModule } from './mensajes-md-routing.module';

import { MensajesMDPage } from './mensajes-md.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesMDPageRoutingModule
  ],
  declarations: [MensajesMDPage]
})
export class MensajesMDPageModule {}
