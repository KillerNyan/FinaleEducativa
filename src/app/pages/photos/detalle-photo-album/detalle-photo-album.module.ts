import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePhotoAlbumPageRoutingModule } from './detalle-photo-album-routing.module';

import { DetallePhotoAlbumPage } from './detalle-photo-album.page';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePhotoAlbumPageRoutingModule
  ],
  declarations: [DetallePhotoAlbumPage]
})
export class DetallePhotoAlbumPageModule {}
