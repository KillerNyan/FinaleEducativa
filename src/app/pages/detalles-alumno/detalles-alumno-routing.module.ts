import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesAlumnoPage } from './detalles-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesAlumnoPageRoutingModule {}
