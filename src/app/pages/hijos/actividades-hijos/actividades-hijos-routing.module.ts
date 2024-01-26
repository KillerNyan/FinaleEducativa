import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadesHijosPage } from './actividades-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadesHijosPage
  },
  {
    path: 'detalle-tarea-hijos',
    loadChildren: () => import('./detalle-tarea-hijos/detalle-tarea-hijos.module').then( m => m.DetalleTareaHijosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadesHijosPageRoutingModule {}
