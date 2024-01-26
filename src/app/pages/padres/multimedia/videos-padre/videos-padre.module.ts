import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosPadrePageRoutingModule } from './videos-padre-routing.module';

import { VideosPadrePage } from './videos-padre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideosPadrePageRoutingModule
  ],
  declarations: [VideosPadrePage]
})
export class VideosPadrePageModule {}
