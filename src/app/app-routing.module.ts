import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    canActivate: [GuardGuard],
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'grados',
    loadChildren: () => import('./pages/grados/grados.module').then( m => m.GradosPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'tareas',
    loadChildren: () => import('./pages/tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'postit',
    loadChildren: () => import('./pages/postit/postit.module').then( m => m.PostitPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'calificaciones',
    loadChildren: () => import('./pages/calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'circulares',
    loadChildren: () => import('./pages/circulares/circulares.module').then( m => m.CircularesPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'photos',
    loadChildren: () => import('./pages/photos/photos.module').then( m => m.PhotosPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'soporte',
    loadChildren: () => import('./pages/soporte/soporte.module').then( m => m.SoportePageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'circular',
    loadChildren: () => import('./pages/circular/circular.module').then( m => m.CircularPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'materias',
    loadChildren: () => import('./pages/materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'tareas-pend',
    loadChildren: () => import('./pages/tareas-pend/tareas-pend.module').then( m => m.TareasPendPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'tab',
    loadChildren: () => import('./pages/padres/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'notificaciones',
    loadChildren: () => import('./pages/padres/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'pinboard',
    loadChildren: () => import('./pages/padres/pinboard/pinboard.module').then( m => m.PinboardPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'multimedia',
    loadChildren: () => import('./pages/padres/multimedia/multimedia.module').then( m => m.MultimediaPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'circulares',
    loadChildren: () => import('./pages/padres/circulares/circulares.module').then( m => m.CircularesPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'alumnos',
    loadChildren: () => import('./pages/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'cali-alumnos',
    loadChildren: () => import('./pages/cali-alumnos/cali-alumnos.module').then( m => m.CaliAlumnosPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'post-sec',
    loadChildren: () => import('./pages/post-sec/post-sec.module').then( m => m.PostSecPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'detalle-postit',
    loadChildren: () => import('./pages/detalle-postit/detalle-postit.module').then( m => m.DetallePostitPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'nuevo-postit',
    loadChildren: () => import('./pages/nuevo-postit/nuevo-postit.module').then( m => m.NuevoPostitPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'detalles-alumno',
    loadChildren: () => import('./pages/detalles-alumno/detalles-alumno.module').then( m => m.DetallesAlumnoPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'detalles-tareas',
    loadChildren: () => import('./pages/detalles-tareas/detalles-tareas.module').then( m => m.DetallesTareasPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'alumnos-postit',
    loadChildren: () => import('./pages/alumnos-postit/alumnos-postit.module').then( m => m.AlumnosPostitPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'postit-por-alumno',
    loadChildren: () => import('./pages/postit-por-alumno/postit-por-alumno.module').then( m => m.PostitPorAlumnoPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'detalles-postit-alumno',
    loadChildren: () => import('./pages/detalles-postit-alumno/detalles-postit-alumno.module').then( m => m.DetallesPostitAlumnoPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'ver-imagenes',
    loadChildren: () => import('./pages/ver-imagenes/ver-imagenes.module').then( m => m.VerImagenesPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'pagos-hijos',
    loadChildren: () => import('./pages/padres/pagos-hijos/pagos-hijos.module').then( m => m.PagosHijosPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'tareas-hijos',
    loadChildren: () => import('./pages/padres/tareas-hijos/tareas-hijos.module').then( m => m.TareasHijosPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'tab-hijos',
    loadChildren: () => import('./pages/hijos/tab-hijos/tab-hijos.module').then( m => m.TabHijosPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'multimedia-hijos',
    loadChildren: () => import('./pages/hijos/multimedia-hijos/multimedia-hijos.module').then( m => m.MultimediaHijosPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'circulares-hijos',
    loadChildren: () => import('./pages/hijos/circulares-hijos/circulares-hijos.module').then( m => m.CircularesHijosPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: 'actividades-hijos',
    loadChildren: () => import('./pages/hijos/actividades-hijos/actividades-hijos.module').then( m => m.ActividadesHijosPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/padres/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chats-maestros',
    loadChildren: () => import('./pages/chats-maestros/chats-maestros.module').then( m => m.ChatsMaestrosPageModule)
  },
  {
    path: 'clases-reportes',
    loadChildren: () => import('./pages/padres/clases-reportes/clases-reportes.module').then( m => m.ClasesReportesPageModule)
  },
  {
    path: 'reportes-secciones',
    loadChildren: () => import('./pages/reportes-secciones/reportes-secciones.module').then( m => m.ReportesSeccionesPageModule)
  },
  {
    path: 'notificaciones-hijos',
    loadChildren: () => import('./pages/hijos/notificaciones-hijos/notificaciones-hijos.module').then( m => m.NotificacionesHijosPageModule)
  },  {
    path: 'calificaciones-hijos',
    loadChildren: () => import('./pages/padres/calificaciones-hijos/calificaciones-hijos.module').then( m => m.CalificacionesHijosPageModule)
  },
  {
    path: 'visor-pdf',
    loadChildren: () => import('./pages/visor-pdf/visor-pdf.module').then( m => m.VisorPDFPageModule)
  },







];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
