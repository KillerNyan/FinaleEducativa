import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaReportesMDPage } from './lista-reportes-md.page';

const routes: Routes = [
  {
    path: '',
    component: ListaReportesMDPage
  },
  {
    path: 'detalle-reportes-md',
    loadChildren: () => import('./detalle-reportes-md/detalle-reportes-md.module').then( m => m.DetalleReportesMDPageModule)
  },
  {
    path: 'nuevo-reporte',
    loadChildren: () => import('./nuevo-reporte/nuevo-reporte.module').then( m => m.NuevoReportePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReportesMDPageRoutingModule {}
