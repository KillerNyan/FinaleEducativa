import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadresChatMDPageRoutingModule } from './padres-chat-md-routing.module';

import { PadresChatMDPage } from './padres-chat-md.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadresChatMDPageRoutingModule
  ],
  declarations: [PadresChatMDPage]
})
export class PadresChatMDPageModule {}
