import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleVideoHijosPageRoutingModule } from './detalle-video-hijos-routing.module';

import { DetalleVideoHijosPage } from './detalle-video-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleVideoHijosPageRoutingModule
  ],
  declarations: [DetalleVideoHijosPage]
})
export class DetalleVideoHijosPageModule {}
