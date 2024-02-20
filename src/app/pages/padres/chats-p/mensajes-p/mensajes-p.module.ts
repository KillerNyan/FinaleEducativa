import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesPPageRoutingModule } from './mensajes-p-routing.module';

import { MensajesPPage } from './mensajes-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesPPageRoutingModule
  ],
  declarations: [MensajesPPage]
})
export class MensajesPPageModule {}
