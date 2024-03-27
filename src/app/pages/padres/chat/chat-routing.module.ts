import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPage } from './chat.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPage
  },
  {
    path: 'nuevo-chat',
    loadChildren: () => import('./nuevo-chat/nuevo-chat.module').then( m => m.NuevoChatPageModule)
  },
  {
    path: 'mensajes-chat',
    loadChildren: () => import('./mensajes-chat/mensajes-chat.module').then( m => m.MensajesChatPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
