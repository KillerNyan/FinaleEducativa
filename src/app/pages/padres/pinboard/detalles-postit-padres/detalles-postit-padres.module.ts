import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesPostitPadresPageRoutingModule } from './detalles-postit-padres-routing.module';

import { DetallesPostitPadresPage } from './detalles-postit-padres.page';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesPostitPadresPageRoutingModule
  ],
  declarations: [DetallesPostitPadresPage]
})
export class DetallesPostitPadresPageModule {}
