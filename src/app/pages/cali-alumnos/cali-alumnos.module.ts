import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaliAlumnosPageRoutingModule } from './cali-alumnos-routing.module';

import { CaliAlumnosPage } from './cali-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaliAlumnosPageRoutingModule
  ],
  declarations: [CaliAlumnosPage]
})
export class CaliAlumnosPageModule {}
