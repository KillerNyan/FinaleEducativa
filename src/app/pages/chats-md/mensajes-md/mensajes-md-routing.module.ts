import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesMDPage } from './mensajes-md.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesMDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesMDPageRoutingModule {}
