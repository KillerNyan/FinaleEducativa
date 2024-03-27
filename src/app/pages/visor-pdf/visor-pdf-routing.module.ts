import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisorPDFPage } from './visor-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: VisorPDFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisorPDFPageRoutingModule {}
