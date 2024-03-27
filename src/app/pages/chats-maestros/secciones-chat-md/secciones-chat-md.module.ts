import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionesChatMDPageRoutingModule } from './secciones-chat-md-routing.module';

import { SeccionesChatMDPage } from './secciones-chat-md.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionesChatMDPageRoutingModule
  ],
  declarations: [SeccionesChatMDPage]
})
export class SeccionesChatMDPageModule {}
