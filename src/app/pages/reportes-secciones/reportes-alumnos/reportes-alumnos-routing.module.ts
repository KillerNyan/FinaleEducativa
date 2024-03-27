import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportesAlumnosPage } from './reportes-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: ReportesAlumnosPage
  },
  {
    path: 'tipo-reportes',
    loadChildren: () => import('./tipo-reportes/tipo-reportes.module').then( m => m.TipoReportesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesAlumnosPageRoutingModule {}
