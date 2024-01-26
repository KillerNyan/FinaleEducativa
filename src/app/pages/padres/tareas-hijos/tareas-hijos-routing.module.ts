import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasHijosPage } from './tareas-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: TareasHijosPage
  },
  {
    path: 'tareas-pend-padres',
    loadChildren: () => import('./tareas-pend-padres/tareas-pend-padres.module').then( m => m.TareasPendPadresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasHijosPageRoutingModule {}
