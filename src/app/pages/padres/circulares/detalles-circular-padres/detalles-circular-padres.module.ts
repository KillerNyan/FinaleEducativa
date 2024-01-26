import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCircularPadresPageRoutingModule } from './detalles-circular-padres-routing.module';

import { DetallesCircularPadresPage } from './detalles-circular-padres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCircularPadresPageRoutingModule
  ],
  declarations: [DetallesCircularPadresPage]
})
export class DetallesCircularPadresPageModule {}
