import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHijosPage } from './tab-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: TabHijosPage,
    children: [
      {
        path: 'notificaciones-hijos',
        loadChildren: () => import('../notificaciones-hijos/notificaciones-hijos.module').then(m => m.NotificacionesHijosPageModule)
      },
      {
        path: 'multimedia-hijos',
        loadChildren: () => import('../multimedia-hijos/multimedia-hijos.module').then(m => m.MultimediaHijosPageModule)
      },
      {
        path: 'circulares-hijos',
        loadChildren: () => import('../circulares-hijos/circulares-hijos.module').then(m => m.CircularesHijosPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHijosPageRoutingModule {}
