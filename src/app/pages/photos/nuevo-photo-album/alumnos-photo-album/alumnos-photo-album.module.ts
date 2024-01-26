import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosPhotoAlbumPageRoutingModule } from './alumnos-photo-album-routing.module';

import { AlumnosPhotoAlbumPage } from './alumnos-photo-album.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosPhotoAlbumPageRoutingModule,
    PipesModule
  ],
  declarations: [AlumnosPhotoAlbumPage]
})
export class AlumnosPhotoAlbumPageModule {}
