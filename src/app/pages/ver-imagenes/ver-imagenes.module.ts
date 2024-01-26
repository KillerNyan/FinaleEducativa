import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerImagenesPageRoutingModule } from './ver-imagenes-routing.module';

import { VerImagenesPage } from './ver-imagenes.page';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerImagenesPageRoutingModule
  ],
  declarations: [VerImagenesPage]
})
export class VerImagenesPageModule {}
