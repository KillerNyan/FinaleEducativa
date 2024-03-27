import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificacionesTiposPage } from './calificaciones-tipos.page';

const routes: Routes = [
  {
    path: '',
    component: CalificacionesTiposPage
  },
  {
    path: 'calificaciones-listas',
    loadChildren: () => import('./calificaciones-listas/calificaciones-listas.module').then( m => m.CalificacionesListasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificacionesTiposPageRoutingModule {}
