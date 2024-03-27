import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificacionesListasPage } from './calificaciones-listas.page';

const routes: Routes = [
  {
    path: '',
    component: CalificacionesListasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificacionesListasPageRoutingModule {}
