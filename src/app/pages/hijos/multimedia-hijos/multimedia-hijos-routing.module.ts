import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultimediaHijosPage } from './multimedia-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: MultimediaHijosPage
  },
  {
    path: 'videos-hijos',
    loadChildren: () => import('./videos-hijos/videos-hijos.module').then( m => m.VideosHijosPageModule)
  },
  {
    path: 'photo-album-hijos',
    loadChildren: () => import('./photo-album-hijos/photo-album-hijos.module').then( m => m.PhotoAlbumHijosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultimediaHijosPageRoutingModule {}
