import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesPostitPadresPage } from './detalles-postit-padres.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPostitPadresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPostitPadresPageRoutingModule {}
