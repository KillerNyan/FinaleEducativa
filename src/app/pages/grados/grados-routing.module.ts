import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradosPage } from './grados.page';

const routes: Routes = [
  {
    path: '',
    component: GradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradosPageRoutingModule {}
