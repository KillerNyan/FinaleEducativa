import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesVideosPadrePageRoutingModule } from './detalles-videos-padre-routing.module';

import { DetallesVideosPadrePage } from './detalles-videos-padre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesVideosPadrePageRoutingModule
  ],
  declarations: [DetallesVideosPadrePage]
})
export class DetallesVideosPadrePageModule {}
