import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasPendPadresPage } from './tareas-pend-padres.page';

const routes: Routes = [
  {
    path: '',
    component: TareasPendPadresPage
  },
  {
    path: 'detalle-tarea-padres',
    loadChildren: () => import('./detalle-tarea-padres/detalle-tarea-padres.module').then( m => m.DetalleTareaPadresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasPendPadresPageRoutingModule {}
