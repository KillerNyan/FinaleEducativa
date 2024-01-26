import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaliAlumnosPage } from './cali-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: CaliAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaliAlumnosPageRoutingModule {}
