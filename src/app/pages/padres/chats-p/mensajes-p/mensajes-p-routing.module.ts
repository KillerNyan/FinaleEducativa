import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesPPage } from './mensajes-p.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesPPageRoutingModule {}
