import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionesTiposPageRoutingModule } from './calificaciones-tipos-routing.module';

import { CalificacionesTiposPage } from './calificaciones-tipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificacionesTiposPageRoutingModule
  ],
  declarations: [CalificacionesTiposPage]
})
export class CalificacionesTiposPageModule {}
