import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePhotoAlbumPage } from './detalle-photo-album.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePhotoAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePhotoAlbumPageRoutingModule {}
