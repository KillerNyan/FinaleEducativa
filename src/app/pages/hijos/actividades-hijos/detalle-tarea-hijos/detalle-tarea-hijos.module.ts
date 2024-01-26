import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleTareaHijosPageRoutingModule } from './detalle-tarea-hijos-routing.module';

import { DetalleTareaHijosPage } from './detalle-tarea-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleTareaHijosPageRoutingModule
  ],
  declarations: [DetalleTareaHijosPage]
})
export class DetalleTareaHijosPageModule {}
