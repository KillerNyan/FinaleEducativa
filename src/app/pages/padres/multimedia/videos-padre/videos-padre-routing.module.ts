import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosPadrePage } from './videos-padre.page';

const routes: Routes = [
  {
    path: '',
    component: VideosPadrePage
  },
  {
    path: 'detalles-videos-padre',
    loadChildren: () => import('./detalles-videos-padre/detalles-videos-padre.module').then( m => m.DetallesVideosPadrePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosPadrePageRoutingModule {}
