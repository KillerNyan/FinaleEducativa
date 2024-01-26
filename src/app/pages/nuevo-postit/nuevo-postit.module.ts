import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPostitPageRoutingModule } from './nuevo-postit-routing.module';

import { NuevoPostitPage } from './nuevo-postit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoPostitPageRoutingModule
  ],
  declarations: [NuevoPostitPage]
})
export class NuevoPostitPageModule {}
