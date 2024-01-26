import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesPostitAlumnoPageRoutingModule } from './detalles-postit-alumno-routing.module';

import { DetallesPostitAlumnoPage } from './detalles-postit-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesPostitAlumnoPageRoutingModule
  ],
  declarations: [DetallesPostitAlumnoPage]
})
export class DetallesPostitAlumnoPageModule {}
