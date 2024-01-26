import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleVideoHijosPage } from './detalle-video-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleVideoHijosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleVideoHijosPageRoutingModule {}
