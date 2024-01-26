import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosPage } from './photos.page';

const routes: Routes = [
  {
    path: '',
    component: PhotosPage
  },  {
    path: 'detalle-photo-album',
    loadChildren: () => import('./detalle-photo-album/detalle-photo-album.module').then( m => m.DetallePhotoAlbumPageModule)
  },
  {
    path: 'nuevo-photo-album',
    loadChildren: () => import('./nuevo-photo-album/nuevo-photo-album.module').then( m => m.NuevoPhotoAlbumPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosPageRoutingModule {}
