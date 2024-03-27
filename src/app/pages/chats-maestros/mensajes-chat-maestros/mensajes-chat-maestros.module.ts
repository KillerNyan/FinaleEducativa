import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesChatMaestrosPageRoutingModule } from './mensajes-chat-maestros-routing.module';

import { MensajesChatMaestrosPage } from './mensajes-chat-maestros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesChatMaestrosPageRoutingModule
  ],
  declarations: [MensajesChatMaestrosPage]
})
export class MensajesChatMaestrosPageModule {}
