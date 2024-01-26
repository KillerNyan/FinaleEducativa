import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesPhAlPadrePage } from './detalles-ph-al-padre.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPhAlPadrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPhAlPadrePageRoutingModule {}
