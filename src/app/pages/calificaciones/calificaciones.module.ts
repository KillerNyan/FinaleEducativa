import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionesPageRoutingModule } from './calificaciones-routing.module';

import { CalificacionesPage } from './calificaciones.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificacionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CalificacionesPage]
})
export class CalificacionesPageModule {}
