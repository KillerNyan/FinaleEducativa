import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerImagenesPage } from './ver-imagenes.page';

const routes: Routes = [
  {
    path: '',
    component: VerImagenesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerImagenesPageRoutingModule {}
