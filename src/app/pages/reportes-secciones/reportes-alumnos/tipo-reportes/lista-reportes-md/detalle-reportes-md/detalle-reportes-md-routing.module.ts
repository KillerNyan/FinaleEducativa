import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleReportesMDPage } from './detalle-reportes-md.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleReportesMDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleReportesMDPageRoutingModule {}
