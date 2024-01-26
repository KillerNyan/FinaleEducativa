import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircularesPageRoutingModule } from './circulares-routing.module';

import { CircularesPage } from './circulares.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircularesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CircularesPage]
})
export class CircularesPageModule {}
