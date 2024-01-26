import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesTareasPage } from './detalles-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesTareasPageRoutingModule {}
