import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaReportesMDPageRoutingModule } from './lista-reportes-md-routing.module';

import { ListaReportesMDPage } from './lista-reportes-md.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReportesMDPageRoutingModule
  ],
  declarations: [ListaReportesMDPage]
})
export class ListaReportesMDPageModule {}
