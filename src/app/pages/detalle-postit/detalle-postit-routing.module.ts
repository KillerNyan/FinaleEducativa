import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePostitPage } from './detalle-postit.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePostitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePostitPageRoutingModule {}
