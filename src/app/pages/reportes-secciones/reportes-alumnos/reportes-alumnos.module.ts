import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportesAlumnosPageRoutingModule } from './reportes-alumnos-routing.module';

import { ReportesAlumnosPage } from './reportes-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportesAlumnosPageRoutingModule
  ],
  declarations: [ReportesAlumnosPage]
})
export class ReportesAlumnosPageModule {}
