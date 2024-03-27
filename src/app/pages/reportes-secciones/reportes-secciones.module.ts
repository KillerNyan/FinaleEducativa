import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportesSeccionesPageRoutingModule } from './reportes-secciones-routing.module';

import { ReportesSeccionesPage } from './reportes-secciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportesSeccionesPageRoutingModule
  ],
  declarations: [ReportesSeccionesPage]
})
export class ReportesSeccionesPageModule {}
