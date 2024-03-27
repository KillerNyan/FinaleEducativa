import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoReportesPageRoutingModule } from './tipo-reportes-routing.module';

import { TipoReportesPage } from './tipo-reportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoReportesPageRoutingModule
  ],
  declarations: [TipoReportesPage]
})
export class TipoReportesPageModule {}
