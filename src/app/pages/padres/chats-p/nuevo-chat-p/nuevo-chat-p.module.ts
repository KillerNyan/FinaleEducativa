import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoChatPPageRoutingModule } from './nuevo-chat-p-routing.module';

import { NuevoChatPPage } from './nuevo-chat-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoChatPPageRoutingModule
  ],
  declarations: [NuevoChatPPage]
})
export class NuevoChatPPageModule {}
