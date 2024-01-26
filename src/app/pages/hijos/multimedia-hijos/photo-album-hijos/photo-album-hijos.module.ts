import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoAlbumHijosPageRoutingModule } from './photo-album-hijos-routing.module';

import { PhotoAlbumHijosPage } from './photo-album-hijos.page';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoAlbumHijosPageRoutingModule
  ],
  declarations: [PhotoAlbumHijosPage]
})
export class PhotoAlbumHijosPageModule {}
