import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPostitPage } from './nuevo-postit.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPostitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPostitPageRoutingModule {}
