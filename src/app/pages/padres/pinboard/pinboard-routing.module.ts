import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinboardPage } from './pinboard.page';

const routes: Routes = [
  {
    path: '',
    component: PinboardPage
  },
  {
    path: 'detalles-postit-padres',
    loadChildren: () => import('./detalles-postit-padres/detalles-postit-padres.module').then( m => m.DetallesPostitPadresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinboardPageRoutingModule {}
