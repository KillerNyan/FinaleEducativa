import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesReportesPage } from './clases-reportes.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesReportesPage
  },
  {
    path: 'hijos-reportes',
    loadChildren: () => import('./hijos-reportes/hijos-reportes.module').then( m => m.HijosReportesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesReportesPageRoutingModule {}
