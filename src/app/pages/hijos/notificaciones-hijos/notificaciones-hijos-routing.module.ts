import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacionesHijosPage } from './notificaciones-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: NotificacionesHijosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificacionesHijosPageRoutingModule {}
