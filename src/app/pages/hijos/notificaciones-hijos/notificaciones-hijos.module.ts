import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesHijosPageRoutingModule } from './notificaciones-hijos-routing.module';

import { NotificacionesHijosPage } from './notificaciones-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesHijosPageRoutingModule
  ],
  declarations: [NotificacionesHijosPage]
})
export class NotificacionesHijosPageModule {}
