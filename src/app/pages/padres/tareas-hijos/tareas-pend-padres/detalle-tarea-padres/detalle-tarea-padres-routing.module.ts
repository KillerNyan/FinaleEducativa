import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleTareaPadresPage } from './detalle-tarea-padres.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleTareaPadresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleTareaPadresPageRoutingModule {}
