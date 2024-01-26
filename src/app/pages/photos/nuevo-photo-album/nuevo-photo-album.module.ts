import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPhotoAlbumPageRoutingModule } from './nuevo-photo-album-routing.module';

import { NuevoPhotoAlbumPage } from './nuevo-photo-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoPhotoAlbumPageRoutingModule
  ],
  declarations: [NuevoPhotoAlbumPage]
})
export class NuevoPhotoAlbumPageModule {}
