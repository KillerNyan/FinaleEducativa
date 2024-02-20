import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsPPage } from './chats-p.page';

const routes: Routes = [
  {
    path: '',
    component: ChatsPPage
  },
  {
    path: 'nuevo-chat-p',
    loadChildren: () => import('./nuevo-chat-p/nuevo-chat-p.module').then( m => m.NuevoChatPPageModule)
  },
  {
    path: 'mensajes-p',
    loadChildren: () => import('./mensajes-p/mensajes-p.module').then( m => m.MensajesPPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsPPageRoutingModule {}
