import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoAlbumHijosPage } from './photo-album-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoAlbumHijosPage
  },
  {
    path: 'detalle-photo-album-hijos',
    loadChildren: () => import('./detalle-photo-album-hijos/detalle-photo-album-hijos.module').then( m => m.DetallePhotoAlbumHijosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoAlbumHijosPageRoutingModule {}
