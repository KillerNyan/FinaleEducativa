import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaReportesPage } from './lista-reportes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaReportesPage
  },
  {
    path: 'detalle-reporte',
    loadChildren: () => import('./detalle-reporte/detalle-reporte.module').then( m => m.DetalleReportePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReportesPageRoutingModule {}
