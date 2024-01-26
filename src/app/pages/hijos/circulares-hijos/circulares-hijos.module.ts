import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircularesHijosPageRoutingModule } from './circulares-hijos-routing.module';

import { CircularesHijosPage } from './circulares-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircularesHijosPageRoutingModule
  ],
  declarations: [CircularesHijosPage]
})
export class CircularesHijosPageModule {}
