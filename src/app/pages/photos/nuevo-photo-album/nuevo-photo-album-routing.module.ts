import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPhotoAlbumPage } from './nuevo-photo-album.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPhotoAlbumPage
  },
  {
    path: 'alumnos-photo-album',
    loadChildren: () => import('./alumnos-photo-album/alumnos-photo-album.module').then( m => m.AlumnosPhotoAlbumPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPhotoAlbumPageRoutingModule {}
