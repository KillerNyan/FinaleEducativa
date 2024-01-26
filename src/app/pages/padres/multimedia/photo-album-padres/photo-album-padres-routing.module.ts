import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoAlbumPadresPage } from './photo-album-padres.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoAlbumPadresPage
  },
  {
    path: 'detalles-ph-al-padre',
    loadChildren: () => import('./detalles-ph-al-padre/detalles-ph-al-padre.module').then( m => m.DetallesPhAlPadrePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoAlbumPadresPageRoutingModule {}
