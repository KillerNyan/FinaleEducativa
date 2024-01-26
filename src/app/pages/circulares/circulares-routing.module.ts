import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircularesPage } from './circulares.page';

const routes: Routes = [
  {
    path: '',
    component: CircularesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircularesPageRoutingModule {}
