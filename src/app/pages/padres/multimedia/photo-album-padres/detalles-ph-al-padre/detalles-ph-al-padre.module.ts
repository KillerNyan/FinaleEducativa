import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesPhAlPadrePageRoutingModule } from './detalles-ph-al-padre-routing.module';

import { DetallesPhAlPadrePage } from './detalles-ph-al-padre.page';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesPhAlPadrePageRoutingModule
  ],
  declarations: [DetallesPhAlPadrePage]
})
export class DetallesPhAlPadrePageModule {}
