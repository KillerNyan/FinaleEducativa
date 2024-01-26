import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosPostitPage } from './alumnos-postit.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosPostitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosPostitPageRoutingModule {}
