import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesTareasPageRoutingModule } from './detalles-tareas-routing.module';

import { DetallesTareasPage } from './detalles-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesTareasPageRoutingModule
  ],
  declarations: [DetallesTareasPage]
})
export class DetallesTareasPageModule {}
