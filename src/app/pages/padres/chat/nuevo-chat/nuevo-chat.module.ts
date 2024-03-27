import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoChatPageRoutingModule } from './nuevo-chat-routing.module';

import { NuevoChatPage } from './nuevo-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoChatPageRoutingModule
  ],
  declarations: [NuevoChatPage]
})
export class NuevoChatPageModule {}
