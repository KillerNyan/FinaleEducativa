import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsMDPage } from './chats-md.page';

const routes: Routes = [
  {
    path: '',
    component: ChatsMDPage
  },
  {
    path: 'mensajes-md',
    loadChildren: () => import('./mensajes-md/mensajes-md.module').then( m => m.MensajesMDPageModule)
  },
  {
    path: 'secciones-chat-md',
    loadChildren: () => import('./secciones-chat-md/secciones-chat-md.module').then( m => m.SeccionesChatMDPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsMDPageRoutingModule {}
