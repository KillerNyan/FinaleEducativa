import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoAlbumPadresPageRoutingModule } from './photo-album-padres-routing.module';

import { PhotoAlbumPadresPage } from './photo-album-padres.page';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoAlbumPadresPageRoutingModule
  ],
  declarations: [PhotoAlbumPadresPage]
})
export class PhotoAlbumPadresPageModule {}
