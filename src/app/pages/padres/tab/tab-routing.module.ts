import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'notificaciones',
        loadChildren: () => import('../notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
      },
      {
        path: 'multimedia',
        loadChildren: () => import('../multimedia/multimedia.module').then(m => m.MultimediaPageModule)
      },
      {
        path: 'pinboard',
        loadChildren: () => import('../pinboard/pinboard.module').then(m => m.PinboardPageModule)
      },
      {
        path: 'circulares',
        loadChildren: () => import('../circulares/circulares.module').then(m => m.CircularesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
