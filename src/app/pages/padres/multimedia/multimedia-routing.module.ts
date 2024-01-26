import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultimediaPage } from './multimedia.page';

const routes: Routes = [
  {
    path: '',
    component: MultimediaPage
  },
  {
    path: 'photo-album-padres',
    loadChildren: () => import('./photo-album-padres/photo-album-padres.module').then( m => m.PhotoAlbumPadresPageModule)
  },
  {
    path: 'videos-padre',
    loadChildren: () => import('./videos-padre/videos-padre.module').then( m => m.VideosPadrePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultimediaPageRoutingModule {}
