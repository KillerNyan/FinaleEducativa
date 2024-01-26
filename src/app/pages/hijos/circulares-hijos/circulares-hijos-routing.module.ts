import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircularesHijosPage } from './circulares-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: CircularesHijosPage
  },
  {
    path: 'detalles-circulares-hijos',
    loadChildren: () => import('./detalles-circulares-hijos/detalles-circulares-hijos.module').then( m => m.DetallesCircularesHijosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircularesHijosPageRoutingModule {}
