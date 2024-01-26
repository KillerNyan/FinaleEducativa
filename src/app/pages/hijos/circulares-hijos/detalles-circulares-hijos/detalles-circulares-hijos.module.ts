import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCircularesHijosPageRoutingModule } from './detalles-circulares-hijos-routing.module';

import { DetallesCircularesHijosPage } from './detalles-circulares-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCircularesHijosPageRoutingModule
  ],
  declarations: [DetallesCircularesHijosPage]
})
export class DetallesCircularesHijosPageModule {}
