import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsPPageRoutingModule } from './chats-p-routing.module';

import { ChatsPPage } from './chats-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsPPageRoutingModule
  ],
  declarations: [ChatsPPage]
})
export class ChatsPPageModule {}
