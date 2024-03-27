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

  constructor(private http: HttpClient) {
   }

  /////////////////////////////////////////////////////////////////////API's Generales//////////////////////////////////////////////////////////////

  async registrarDispositivo<T>(device_id: any, device_token: any, device_type: any, codigo: any){
    return this.http.get<T>(`${asmsURL}API_pushup_notification.php?request=register&user_id=${codigo}&device_id=${device_id}&device_token=${device_token}&device_type=${device_type}&certificate_type=0`);
  }

  async getImagenes<T>() {
    return this.http.get<T>(`${asmsURL}API_util.php?request=images`);
  }

  ///////////////////////////////////////////////////////////////API's Maestros y Directores///////////////////////////////////////////////////////

  async getSecciones<T>(tipoUsuario: any, codigo: any) {
    return this.http.get<T>(`${asmsURL}API_alumnos.php?request=usuario_secciones&tipo=${tipoUsuario}&codigo=${codigo}`);
  }

  async getAlumnos<T>(grado: any, nivel: any, seccion: any) {
    return this.http.get<T>(`${asmsURL}API_alumnos.php?request=lista_alumnos&nivel=${nivel}&grado=${grado}&seccion=${seccion}`);
  }

  async getDetallesAlumno<T>(cui: any) {
    return this.http.get<T>(`${asmsURL}API_alumnos.php?request=alumno_perfil&cui=${cui}`);
  }

  //Tareas
  async getMaterias<T>(tipoUsu: any, codigoUsu: any, nivel: any, grado: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_tareas.php?request=maestro_materias&tipo=${tipoUsu}&codigo=${codigoUsu}&nivel=${nivel}&grado=${grado}`);
  }

  async getTareas<T>(nivel: any, grado: any, seccion: any, codigoMateria: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_tareas.php?request=tareas_materia&nivel=${nivel}&grado=${grado}&seccion=${seccion}&materia=${codigoMateria}`);
  }

  async getDetallesTareas<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_tareas.php?request=tarea&codigo=${codigo}`);
  }

  //Post It
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

  //Circulares
  async getCirculares<T>(codigoMaestro: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_circulares.php?request=circulares&maestro=${codigoMaestro}&page=${page}`);
  }

  async getCircular<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_circulares.php?request=circular&codigo=${codigo}`);
  }

  //Photo Album
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

  //Reportes
  async nuevoPanial<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=new_panial&data=${JSON.stringify(data)}`);
  }
  
  async editarPanial<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=update_panial&data=${JSON.stringify(data)}`);
  }
  
  async eliminarPanial<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=delete_panial&codigo=${codigo}`);
  }

  async nuevoGolpe<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=new_golpe&data=${JSON.stringify(data)}`);
  }

  async editarGolpe<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=update_golpe&data=${JSON.stringify(data)}`);
  }
  
  async eliminarGolpe<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=delete_golpe&codigo=${codigo}`);
  }

  async nuevoEnfermedad<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=new_enfermedad&data=${JSON.stringify(data)}`);
  }

  async editarEnfermedad<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=update_enfermedad&data=${JSON.stringify(data)}`);
  }

  async eliminarEnfermedad<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=delete_enfermedad&codigo=${codigo}`);
  }

  async nuevoConducta<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=new_conducta&data=${JSON.stringify(data)}`);
  }

  async editarConducta<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=update_conducta&data=${JSON.stringify(data)}`);
  }

  async eliminarConducta<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_reportes.php?request=delete_conducta&codigo=${codigo}`);
  }

  //Soporte Técnico
  async sporteTecnico<T>(data: any) {
    return this.http.get<T>(`${asmsURL}API_contactanos.php?request=contactanos&data=${JSON.stringify(data)}`);
  }

  //Chat
  async getSeccionesChat<T>(tipoUsu: any, codigo: any) {
    return this.http.get<T>(`${asmsURL}API_chat.php?request=usuarios_secciones&tipo=${tipoUsu}&codigo=${codigo}`);
  }

  async getPadresChat<T>(nivel: any, grado: any, seccion: any) {
    return this.http.get<T>(`${asmsURL}API_chat.php?request=padres&nivel=${nivel}&grado=${grado}&seccion=${seccion}`);
  }

  ////////////////////////////////////////////////////////API's Padres///////////////////////////////////////////////////////////////

  async getHijos<T>(tipoUsu: any, codigo: any) {
    return this.http.get<T>(`${asmsURL}API_videoclases.php?request=hijos&tipo=${tipoUsu}&codigo=${codigo}`);
  }

  //Nivel del Home
  //Notificaciones
  async getNotificaciones<T>(codigo: any, tipo: any, alumno: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_pushup_notification.php?request=list&user_id=${codigo}&type=${tipo}&alumno=${alumno}&page=${page}`);
  }

  async cambioStatusNotificacion<T>(codigo: any, tipo: any, codigoNotificacion: any) {
    return this.http.get<T>(`${asmsURL}API_pushup_notification.php?request=reset_especifica&user_id=${codigo}&type=${tipo}&type_id=${codigoNotificacion}`);
  }

  //Photo Album
  async getPhotoAlbumPadre<T>(tipoUsu: any, codUsu: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_photos.php?request=albumes&tipo=${tipoUsu}&codigo=${codUsu}&page=${page}`);
  }

  async getDetallesPhotoAlbumPadre<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_photos.php?request=detalle&codigo=${codigo}`);
  }

  //Videos
  async getVideosPadre<T>(tipo: any, categoria: any, orden: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=multimedia&tipo=${tipo}&categoria=${categoria}&orden${orden}&page=${page}`);
  }

  async getDetalleVideosPadre<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=detalle_multimedia&codigo=${codigo}`);
  }

  //Pinboard
  async getPinboardPadre<T>(hijos: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=pinboard&alumnos=${hijos}&page=${page}`);
  }

  async getDetallePostItPadres<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=detalle_pinboard&codigo=${codigo}`);
  }

  //Circulares
  async getCircularesPadre<T>(hijos: any, codigo: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circulares&alumnos=${hijos}&pdi_usuario=${codigo}&page=${page}`);
  }

  async getDetalleCircularPadre<T>(codigo: any, tipoUsu: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circular&codigo=${codigo}&pdi_usuario=${tipoUsu}`);
  }

  async autorizacionCircular<T>(codigo: any, codigoPadre: any, autorizacion: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circular_autorizacion&codigo=${codigo}&pdi=${codigoPadre}&autorizacion=${autorizacion}`);
  }

  //Pagos
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

  //Tareas
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

  //Calificaciones //Notas
  async getHijosCalificaciones<T>(usuario: any, codigo: any) {
    return this.http.get<T>(`${asmsURL}API_notas.php?request=hijos&tipo=${usuario}&codigo=${codigo}`);
  }

  async getUnidades<T>(nivel: any, grado: any) {
    return this.http.get<T>(`${asmsURL}API_notas.php?request=unidades&nivel=${nivel}&grado=${grado}`);
  }

  async getUnidadesMaterias<T>(nivel: any, grado: any, unidad: any, alumno: any) {
    return this.http.get<T>(`${asmsURL}API_notas.php?request=unidad_materias&nivel=${nivel}&grado=${grado}&unidad=${unidad}&alumno=${alumno}`);
  }

  async getMateriasNotas<T>(nivel: any, grado: any) {
    return this.http.get<T>(`${asmsURL}API_notas.php?request=materias&nivel=${nivel}&grado=${grado}`);
  }

  async getMateriasUnidades<T>(nivel: any, grado: any, materia: any, alumno: any) {
    return this.http.get<T>(`${asmsURL}API_notas.php?request=materia_unidades_maestro&nivel=${nivel}&grado=${grado}&materia=${materia}&alumno=${alumno}`);
  }
  
  //Reportes
  async getHijosReportes<T>(usuario: any, codigo: any, usuCodigo: any) {
    return this.http.get<T>(`${asmsURL}API_reportes.php?request=hijos&tipo=${usuario}&codigo=${codigo}&usu_codigo=${usuCodigo}`);
  }

  async getReportesPañal<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_reportes.php?request=panial&alumno=${codigo}`);
  }

  async getDetallePañal<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_reportes.php?request=detalle_panial&codigo=${codigo}`);
  }

  async getReportesGolpe<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_reportes.php?request=golpe&alumno=${codigo}`);
  }

  async getDetalleGolpe<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_reportes.php?request=detalle_golpe&codigo=${codigo}`);
  }

  async getReportesEnfermedad<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_reportes.php?request=enfermedad&alumno=${codigo}`);
  }

  async getDetalleEnfermedad<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_reportes.php?request=detalle_enfermedad&codigo=${codigo}`);
  }

  async getReportesConducta<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_reportes.php?request=conducta&alumno=${codigo}`);
  }

  async getDetalleConducta<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_reportes.php?request=detalle_conducta&codigo=${codigo}`);
  }

  //Chat
  async getChatsPadres<T>(codigo: any, tipoUsu: any) {
    return this.http.get<T>(`${asmsURL}API_chat.php?request=lista_dialogos&usuario=${codigo}&tipo_usuario=${tipoUsu}`);
  }

  async getMensajesChatsPadres<T>(codigo: any, chat: any) {
    return this.http.get<T>(`${asmsURL}API_chat.php?request=lista_mensajes&dialogo=${chat}&usuario=${codigo}`);
  }

  async postMensajesChatsPadres<T>(tipoUsuP: any, codigoP: any, tipoUsuMD: any, codigoMD: any, mensaje: any) {
    const fd = new FormData();
    fd.append('image', mensaje);
    return this.http.post<T>(`${asmsURL}API_chat.php?request=nuevo_dialogo&sender_type=${tipoUsuP}&sender=${codigoP}&receiver_type=${tipoUsuMD}&receiver=${codigoMD}&message=${mensaje}`, fd);
  }

  async postEnvioMensajesChatsPadres<T>(dialogo: any, codigo: any, tipoUsu: any, mensaje: any) {
    const fd = new FormData();
    fd.append('image', mensaje);
    return this.http.post<T>(`${asmsURL}API_chat.php?request=enviar&dialogo=${dialogo}&sender_type=${tipoUsu}&sender=${codigo}&message=${mensaje}`, fd);
  }

  async getMaestrosChatPadres<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_chat.php?request=usuarios&cui=${codigo}`);
  }
  
  /////////////////////////////////////////////////////////////////API's Hijos//////////////////////////////////////////////////////////////////
  
  //Nivel del Inicio
  //Photo Album
  async getPhotoAlbumAlumnos<T>(tipoUsu: any, codigoUsu: any, page: any) {
    return this.http.get<T>(`${asmsURL}ALUMNOS/API_photos.php?request=albumes&tipo=${tipoUsu}&codigo=${codigoUsu}&page=${page}`);
  }
  
  async getDetallePhotoAlbumAlumnos<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}ALUMNOS/API_photos.php?request=detalle&codigo=${codigo}`);
  }
  
  //Circulares
  async getCircularesAlumnos<T>(alumno: any, autorizador: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circulares&alumnos=${alumno}&pdi_usuario=${autorizador}&page=${page}`);
  }

  async getDetalleCircularesAlumnos<T>(codigo: any, autorizador: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circular&codigo=${codigo}&pdi_usuario=${autorizador}`);
  }
  
  //Tareas
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
