import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesAlumnoPageRoutingModule } from './detalles-alumno-routing.module';

import { DetallesAlumnoPage } from './detalles-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesAlumnoPageRoutingModule
  ],
  declarations: [DetallesAlumnoPage]
})
export class DetallesAlumnoPageModule {}
