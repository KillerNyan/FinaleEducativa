import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsMaestrosPageRoutingModule } from './chats-maestros-routing.module';

import { ChatsMaestrosPage } from './chats-maestros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsMaestrosPageRoutingModule
  ],
  declarations: [ChatsMaestrosPage]
})
export class ChatsMaestrosPageModule {}
