import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareasHijosPageRoutingModule } from './tareas-hijos-routing.module';

import { TareasHijosPage } from './tareas-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareasHijosPageRoutingModule
  ],
  declarations: [TareasHijosPage]
})
export class TareasHijosPageModule {}
