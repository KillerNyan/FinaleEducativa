import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosHijosPage } from './videos-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: VideosHijosPage
  },
  {
    path: 'detalle-video-hijos',
    loadChildren: () => import('./detalle-video-hijos/detalle-video-hijos.module').then( m => m.DetalleVideoHijosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosHijosPageRoutingModule {}
