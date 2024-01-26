import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareasPendPadresPageRoutingModule } from './tareas-pend-padres-routing.module';

import { TareasPendPadresPage } from './tareas-pend-padres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareasPendPadresPageRoutingModule
  ],
  declarations: [TareasPendPadresPage]
})
export class TareasPendPadresPageModule {}
