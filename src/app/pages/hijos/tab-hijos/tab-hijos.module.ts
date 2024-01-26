import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabHijosPageRoutingModule } from './tab-hijos-routing.module';

import { TabHijosPage } from './tab-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabHijosPageRoutingModule
  ],
  declarations: [TabHijosPage]
})
export class TabHijosPageModule {}
