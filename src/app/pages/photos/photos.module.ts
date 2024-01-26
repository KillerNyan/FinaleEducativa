import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosPageRoutingModule } from './photos-routing.module';

import { PhotosPage } from './photos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PhotosPage]
})
export class PhotosPageModule {}
