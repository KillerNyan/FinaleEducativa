import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePhotoAlbumHijosPageRoutingModule } from './detalle-photo-album-hijos-routing.module';

import { DetallePhotoAlbumHijosPage } from './detalle-photo-album-hijos.page';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePhotoAlbumHijosPageRoutingModule
  ],
  declarations: [DetallePhotoAlbumHijosPage]
})
export class DetallePhotoAlbumHijosPageModule {}
