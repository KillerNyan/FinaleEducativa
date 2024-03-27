import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleReportesMDPageRoutingModule } from './detalle-reportes-md-routing.module';

import { DetalleReportesMDPage } from './detalle-reportes-md.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleReportesMDPageRoutingModule
  ],
  declarations: [DetalleReportesMDPage]
})
export class DetalleReportesMDPageModule {}
