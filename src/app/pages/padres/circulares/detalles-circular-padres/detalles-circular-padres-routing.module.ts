import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCircularPadresPage } from './detalles-circular-padres.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCircularPadresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCircularPadresPageRoutingModule {}
