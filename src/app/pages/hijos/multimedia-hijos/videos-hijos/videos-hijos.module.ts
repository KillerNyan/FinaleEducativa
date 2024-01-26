import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosHijosPageRoutingModule } from './videos-hijos-routing.module';

import { VideosHijosPage } from './videos-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideosHijosPageRoutingModule
  ],
  declarations: [VideosHijosPage]
})
export class VideosHijosPageModule {}
