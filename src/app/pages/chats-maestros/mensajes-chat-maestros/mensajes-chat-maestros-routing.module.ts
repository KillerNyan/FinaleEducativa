import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesChatMaestrosPage } from './mensajes-chat-maestros.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesChatMaestrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesChatMaestrosPageRoutingModule {}
