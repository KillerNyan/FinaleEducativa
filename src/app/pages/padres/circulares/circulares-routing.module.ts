import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircularesPage } from './circulares.page';

const routes: Routes = [
  {
    path: '',
    component: CircularesPage
  },
  {
    path: 'detalles-circular-padres',
    loadChildren: () => import('./detalles-circular-padres/detalles-circular-padres.module').then( m => m.DetallesCircularPadresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircularesPageRoutingModule {}
