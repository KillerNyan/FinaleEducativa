import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePostitPageRoutingModule } from './detalle-postit-routing.module';

import { DetallePostitPage } from './detalle-postit.page';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePostitPageRoutingModule
  ],
  declarations: [DetallePostitPage]
})
export class DetallePostitPageModule {}
