import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportesSeccionesPage } from './reportes-secciones.page';

const routes: Routes = [
  {
    path: '',
    component: ReportesSeccionesPage
  },
  {
    path: 'reportes-alumnos',
    loadChildren: () => import('./reportes-alumnos/reportes-alumnos.module').then( m => m.ReportesAlumnosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesSeccionesPageRoutingModule {}
