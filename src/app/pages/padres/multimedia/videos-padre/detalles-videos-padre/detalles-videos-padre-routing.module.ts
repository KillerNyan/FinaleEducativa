import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesVideosPadrePage } from './detalles-videos-padre.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesVideosPadrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesVideosPadrePageRoutingModule {}
