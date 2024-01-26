import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesPostitAlumnoPage } from './detalles-postit-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPostitAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPostitAlumnoPageRoutingModule {}
