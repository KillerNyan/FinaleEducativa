import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleTareaPadresPageRoutingModule } from './detalle-tarea-padres-routing.module';

import { DetalleTareaPadresPage } from './detalle-tarea-padres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleTareaPadresPageRoutingModule
  ],
  declarations: [DetalleTareaPadresPage]
})
export class DetalleTareaPadresPageModule {}
