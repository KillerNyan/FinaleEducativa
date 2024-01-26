import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePhotoAlbumHijosPage } from './detalle-photo-album-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePhotoAlbumHijosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePhotoAlbumHijosPageRoutingModule {}
