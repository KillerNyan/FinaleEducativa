import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleTareaHijosPage } from './detalle-tarea-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleTareaHijosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleTareaHijosPageRoutingModule {}
