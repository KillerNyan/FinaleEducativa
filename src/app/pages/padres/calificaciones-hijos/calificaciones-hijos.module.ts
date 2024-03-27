import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionesHijosPageRoutingModule } from './calificaciones-hijos-routing.module';

import { CalificacionesHijosPage } from './calificaciones-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificacionesHijosPageRoutingModule
  ],
  declarations: [CalificacionesHijosPage]
})
export class CalificacionesHijosPageModule {}
