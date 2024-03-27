import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HijosReportesPage } from './hijos-reportes.page';

const routes: Routes = [
  {
    path: '',
    component: HijosReportesPage
  },
  {
    path: 'lista-reportes',
    loadChildren: () => import('./lista-reportes/lista-reportes.module').then( m => m.ListaReportesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HijosReportesPageRoutingModule {}
