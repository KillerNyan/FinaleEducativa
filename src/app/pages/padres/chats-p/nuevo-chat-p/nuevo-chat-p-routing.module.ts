import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoChatPPage } from './nuevo-chat-p.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoChatPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoChatPPageRoutingModule {}
