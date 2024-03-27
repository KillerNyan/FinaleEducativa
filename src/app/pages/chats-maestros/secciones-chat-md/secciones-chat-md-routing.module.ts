import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccionesChatMDPage } from './secciones-chat-md.page';

const routes: Routes = [
  {
    path: '',
    component: SeccionesChatMDPage
  },
  {
    path: 'padres-chat-md',
    loadChildren: () => import('./padres-chat-md/padres-chat-md.module').then( m => m.PadresChatMDPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionesChatMDPageRoutingModule {}
