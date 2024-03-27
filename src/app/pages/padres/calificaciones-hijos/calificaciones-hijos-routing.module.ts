import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificacionesHijosPage } from './calificaciones-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: CalificacionesHijosPage
  },
  {
    path: 'calificaciones-tipos',
    loadChildren: () => import('./calificaciones-tipos/calificaciones-tipos.module').then( m => m.CalificacionesTiposPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificacionesHijosPageRoutingModule {}
