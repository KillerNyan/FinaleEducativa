import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsMDPageRoutingModule } from './chats-md-routing.module';

import { ChatsMDPage } from './chats-md.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsMDPageRoutingModule
  ],
  declarations: [ChatsMDPage]
})
export class ChatsMDPageModule {}
