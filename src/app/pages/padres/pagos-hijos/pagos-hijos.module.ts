import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagosHijosPageRoutingModule } from './pagos-hijos-routing.module';

import { PagosHijosPage } from './pagos-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagosHijosPageRoutingModule
  ],
  declarations: [PagosHijosPage]
})
export class PagosHijosPageModule {}
