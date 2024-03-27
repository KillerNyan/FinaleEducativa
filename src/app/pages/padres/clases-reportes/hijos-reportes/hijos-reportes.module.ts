import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HijosReportesPageRoutingModule } from './hijos-reportes-routing.module';

import { HijosReportesPage } from './hijos-reportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HijosReportesPageRoutingModule
  ],
  declarations: [HijosReportesPage]
})
export class HijosReportesPageModule {}
