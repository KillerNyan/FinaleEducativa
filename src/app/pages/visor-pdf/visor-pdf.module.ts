import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisorPDFPageRoutingModule } from './visor-pdf-routing.module';

import { VisorPDFPage } from './visor-pdf.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisorPDFPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [VisorPDFPage]
})
export class VisorPDFPageModule {}
