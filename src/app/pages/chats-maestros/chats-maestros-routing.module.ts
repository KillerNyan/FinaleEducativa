import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsMaestrosPage } from './chats-maestros.page';

const routes: Routes = [
  {
    path: '',
    component: ChatsMaestrosPage
  },
  {
    path: 'mensajes-chat-maestros',
    loadChildren: () => import('./mensajes-chat-maestros/mensajes-chat-maestros.module').then( m => m.MensajesChatMaestrosPageModule)
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
export class ChatsMaestrosPageRoutingModule {}
