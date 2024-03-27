import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoReportesPage } from './tipo-reportes.page';

const routes: Routes = [
  {
    path: '',
    component: TipoReportesPage
  },
  {
    path: 'lista-reportes-md',
    loadChildren: () => import('./lista-reportes-md/lista-reportes-md.module').then( m => m.ListaReportesMDPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoReportesPageRoutingModule {}
