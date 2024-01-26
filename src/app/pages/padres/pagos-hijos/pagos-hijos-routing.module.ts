import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagosHijosPage } from './pagos-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: PagosHijosPage
  },
  {
    path: 'detalle-pagos',
    loadChildren: () => import('./detalle-pagos/detalle-pagos.module').then( m => m.DetallePagosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosHijosPageRoutingModule {}
