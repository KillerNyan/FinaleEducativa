import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';

const asmsURL = environment.asmsURL;

@Injectable({
  providedIn: 'root'
})
export class AsmsServiceService {

  data = null;
  datosUsuario: any;
  datosActividad: any;

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
   }

  async getActividades<T>(){
    this.datosUsuario = await this.storage.get('datos');
    return this.http.get<T>(`${asmsURL}API_gestor_actividades.php?request=actividades&tipo=${this.datosUsuario.tipo_usuario}`);
  }

  async getActividad<T>(codigo: any){
    this.datosActividad = await this.storage.get('datos');
    return this.http.get<T>(`${asmsURL}API_gestor_actividades.php?request=actividad&codigo=${codigo}`);
  }

  async getSecciones<T>() {
    this.datosUsuario = await this.storage.get('datos');
    return this.http.get<T>(`${asmsURL}API_alumnos.php?request=usuario_secciones&tipo=${this.datosUsuario.tipo_usuario}&codigo=${this.datosUsuario.tipo_codigo}`);
  }

  async getAlumnos<T>(grado: any, nivel: any, seccion: any) {
    return this.http.get<T>(`${asmsURL}API_alumnos.php?request=lista_alumnos&nivel=${nivel}&grado=${grado}&seccion=${seccion}`);
  }

  async getDetallesAlumno<T>(cui: any) {
    return this.http.get<T>(`${asmsURL}API_alumnos.php?request=alumno_perfil&cui=${cui}`);
  }

  async getMaterias<T>(tipoUsu: any, codigoUsu: any, nivel: any, grado: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_tareas.php?request=maestro_materias&tipo=${tipoUsu}&codigo=${codigoUsu}&nivel=${nivel}&grado=${grado}`);
  }

  async getTareas<T>(nivel: any, grado: any, seccion: any, codigoMateria: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_tareas.php?request=tareas_materia&nivel=${nivel}&grado=${grado}&seccion=${seccion}&materia=${codigoMateria}`);
  }

  async getDetallesTareas<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_tareas.php?request=tarea&codigo=${codigo}`);
  }

  async getPostit<T>(maestro: any, grado: any, nivel: any, seccion: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_pinboard.php?request=postits_mestro&maestro=${maestro}&nivel=${nivel}&grado=${grado}&seccion=${seccion}&page=${page}`);
  }

  async getDetallePostit<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_pinboard.php?request=postit&codigo=${codigo}`);
  }

  async ModificarPostit<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_pinboard.php?request=update_postit&data=${JSON.stringify(data)}`);
  }

  async EliminarPostit<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_pinboard.php?request=delete_postit&codigo=${codigo}`);
  }

  async nuevoPostit<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_pinboard.php?request=new_postit&data=${JSON.stringify(data)}`);
  }

  async FilesPostit<T>(codigo: any, extension: any, file: any) {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<T>(`${asmsURL}API_archivos_upload.php?codigo=${codigo}&codigoType=${extension}`, fd);
  }

  async ImgsPostit<T>(codigo: any, extension: any, file: any) {
    const fd = new FormData();
    fd.append('image', file);
    return this.http.post<T>(`${asmsURL}API_photos_postit.php?codigo=${codigo}&codigoType=${extension}`, fd);
  }

  async getPostitPorAlumno<T>(grado: any, nivel: any, seccion: any, codAlu: any, tipoUsu: any, codMaestro: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_pinboard.php?request=postits_alumno&nivel=${nivel}&grado=${grado}&seccion=${seccion}&alumno=${codAlu}&tipo_usuario=${tipoUsu}&usuario=${codMaestro}`);
  }

  async getCirculares<T>(codigoMaestro: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_circulares.php?request=circulares&maestro=${codigoMaestro}&page=${page}`);
  }

  async getCircular<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_circulares.php?request=circular&codigo=${codigo}`);
  }

  async getAlbumes<T>(tipo: any, codigo: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_photos.php?request=lista_albumes&tipo=${tipo}&codigo=${codigo}&page=${page}`);
  }

  async getDetalleAlbumes<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_photos.php?request=detalle&codigo=${codigo}`);
  }

  async EliminarAlbum<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_photos.php?request=delete_album&codigo=${codigo}`);
  }

  async nuevoPhotoAlbum<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_photos.php?request=new_album&data=${JSON.stringify(data)}`);
  }

  async ImgsPhotoAlbum<T>(codigo: any, file: any) {
    const fd = new FormData();
    fd.append('image', file);
    return this.http.post<T>(`${asmsURL}API_photos_upload.php?album=${codigo}`, fd);
  }

  async sporteTecnico<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_contactanos.php?request=contactanos&data=${JSON.stringify(data)}`);
  }

  //API's Padres

  async getImagenes<T>() {
    return this.http.get<T>(`${asmsURL}API_util.php?request=images`);
  }

  async getHijos<T>(tipoUsu: any, codigo: any) {
    return this.http.get<T>(`${asmsURL}API_videoclases.php?request=hijos&tipo=${tipoUsu}&codigo=${codigo}`);
  }

  async getNotificaciones<T>(usu: any, tipo: any, alumno: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_pushup_notification.php?request=list&user_id=${usu}&type=${tipo}&alumno=${alumno}&page=${page}`);
  }

  async getPhotoAlbumPadre<T>(tipoUsu: any, codUsu: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_photos.php?request=albumes&tipo=${tipoUsu}&codigo=${codUsu}&page=${page}`);
  }

  async getDetallesPhotoAlbumPadre<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_photos.php?request=detalle&codigo=${codigo}`);
  }

  async getVideosPadre<T>(tipo: any, categoria: any, orden: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=multimedia&tipo=${tipo}&categoria=${categoria}&orden${orden}&page=${page}`);
  }

  async getDetalleVideosPadre<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=detalle_multimedia&codigo=${codigo}`);
  }

  async getPinboardPadre<T>(hijos: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=pinboard&alumnos=${hijos}&page=${page}`);
  }

  async getDetallePostItPadres<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=detalle_pinboard&codigo=${codigo}`);
  }

  async getCircularesPadre<T>(hijos: any, codigo: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circulares&alumnos=${hijos}&pdi_usuario=${codigo}&page=${page}`);
  }

  async getDetalleCircularPadre<T>(codigo: any, tipoUsu: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circular&codigo=${codigo}&pdi_usuario=${tipoUsu}`);
  }

  async autorizacionCircular<T>(codigo: any, codigoPadre: any, autorizacion: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circular_autorizacion&codigo=${codigo}&pdi=${codigoPadre}&autorizacion=${autorizacion}`);
  }

  async getHijosPagos<T>(tipoUsu: any, codigo: any) {
    return this.http.get<T>(`${asmsURL}API_pagos.php?request=hijos&tipo=${tipoUsu}&codigo=${codigo}`);
  }

  async getPagosProgramados<T>(codigoHijo: any) {
    return this.http.get<T>(`${asmsURL}API_pagos.php?request=programados&hijo=${codigoHijo}`);
  }

  async getPagosRealizados<T>(codigoHijo: any) {
    return this.http.get<T>(`${asmsURL}API_pagos.php?request=ejecutados&hijo=${codigoHijo}`);
  }

  async getPagosSaldos<T>(codigoHijo: any) {
    return this.http.get<T>(`${asmsURL}API_pagos.php?request=saldo&hijo=${codigoHijo}`);
  }

  async getHijosActividades<T>(tipoUsu: any, codigo: any) {
    return this.http.get<T>(`${asmsURL}API_pagos.php?request=hijos&tipo=${tipoUsu}&codigo=${codigo}`);
  }

  async getTareasPadres<T>(codigoHijo: any) {
    return this.http.get<T>(`${asmsURL}API_tareas.php?request=tareas_alumno&alumno=${codigoHijo}`);
  }

  async getDetalleTareaPadres<T>(codigo: any, hijo: any, situacion: any) {
    return this.http.get<T>(`${asmsURL}API_tareas.php?request=tarea&codigo=${codigo}&alumno=${hijo}&situacion=${situacion}`);
  }

  async getDocsTareaPadres<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_tareas.php?request=tarea_archivo&codigo=${codigo}`);
  }
  
  //API's Hijos
  
  async getPhotoAlbumAlumnos<T>(tipoUsu: any, codigoUsu: any, page: any) {
    return this.http.get<T>(`${asmsURL}ALUMNOS/API_photos.php?request=albumes&tipo=${tipoUsu}&codigo=${codigoUsu}&page=${page}`);
  }
  
  async getDetallePhotoAlbumAlumnos<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}ALUMNOS/API_photos.php?request=detalle&codigo=${codigo}`);
  }
  
  async getCircularesAlumnos<T>(alumno: any, autorizador: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circulares&alumnos=${alumno}&pdi_usuario=${autorizador}&page=${page}`);
  }

  async getDetalleCircularesAlumnos<T>(codigo: any, autorizador: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circular&codigo=${codigo}&pdi_usuario=${autorizador}`);
  }
  
  async getTareasAlumnos<T>(codigoAlumno: any) {
    return this.http.get<T>(`${asmsURL}API_tareas.php?request=tareas_alumno&alumno=${codigoAlumno}`);
  }

  async getDetalleTareaAlumnos<T>(codigo: any, alumno: any, situacion: any) {
    return this.http.get<T>(`${asmsURL}API_tareas.php?request=tarea&codigo=${codigo}&alumno=${alumno}&situacion=${situacion}`);
  }

  async getDocsTareaAlumnos<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_tareas.php?request=tarea_archivo&codigo=${codigo}`);
  }
  
}
