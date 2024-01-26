import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCircularesHijosPage } from './detalles-circulares-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCircularesHijosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCircularesHijosPageRoutingModule {}
