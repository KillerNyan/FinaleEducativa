import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadesHijosPageRoutingModule } from './actividades-hijos-routing.module';

import { ActividadesHijosPage } from './actividades-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadesHijosPageRoutingModule
  ],
  declarations: [ActividadesHijosPage]
})
export class ActividadesHijosPageModule {}
