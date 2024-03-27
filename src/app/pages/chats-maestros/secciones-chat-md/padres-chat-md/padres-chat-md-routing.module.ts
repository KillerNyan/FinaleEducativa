import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadresChatMDPage } from './padres-chat-md.page';

const routes: Routes = [
  {
    path: '',
    component: PadresChatMDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadresChatMDPageRoutingModule {}
