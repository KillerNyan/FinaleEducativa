import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultimediaHijosPageRoutingModule } from './multimedia-hijos-routing.module';

import { MultimediaHijosPage } from './multimedia-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultimediaHijosPageRoutingModule
  ],
  declarations: [MultimediaHijosPage]
})
export class MultimediaHijosPageModule {}
