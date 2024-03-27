import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionesListasPageRoutingModule } from './calificaciones-listas-routing.module';

import { CalificacionesListasPage } from './calificaciones-listas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificacionesListasPageRoutingModule
  ],
  declarations: [CalificacionesListasPage]
})
export class CalificacionesListasPageModule {}
