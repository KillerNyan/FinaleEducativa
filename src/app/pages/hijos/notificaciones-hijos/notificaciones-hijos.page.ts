import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallesCircularesHijosPage } from '../circulares-hijos/detalles-circulares-hijos/detalles-circulares-hijos.page';
import { DetallePhotoAlbumHijosPage } from '../multimedia-hijos/photo-album-hijos/detalle-photo-album-hijos/detalle-photo-album-hijos.page';
import { DetalleTareaHijosPage } from '../actividades-hijos/detalle-tarea-hijos/detalle-tarea-hijos.page';

@Component({
  selector: 'app-notificaciones-hijos',
  templateUrl: './notificaciones-hijos.page.html',
  styleUrls: ['./notificaciones-hijos.page.scss'],
})
export class NotificacionesHijosPage implements OnInit {

  notificaciones: any[] = [];
  datosUsuario: any;
  codigo: any = '';
  tipoUsu: any = '';
  tipo: string = '';
  alumno: string = '';
  page: number = 0;
  tipoNotificacion: string = '';
  scroll: boolean = false;

  constructor(private asmsSrvc: AsmsServiceService, private modalCtrl: ModalController, private strg: Storage) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigo = this.datosUsuario.tipo_codigo;
    this.tipoUsu = this.datosUsuario.tipo_usuario;
    (await this.asmsSrvc.getNotificaciones(this.codigo, this.tipo, this.alumno, this.page)).subscribe((notificaciones: any) => {
      if (Object.prototype.toString.call(notificaciones) === '[object Array]') {
        this.notificaciones = notificaciones;
        console.log(notificaciones);
      }
    });
  }

  recarga(event: any) {
    this.page = 0;
    setTimeout(async () => {
      (await this.asmsSrvc.getNotificaciones(this.codigo, this.tipo, this.alumno, this.page)).subscribe((notificaciones: any) => {
        if (Object.prototype.toString.call(notificaciones) === '[object Array]') {
          this.notificaciones = notificaciones;
          //console.log(notificaciones);
        }
      });
      event.target.complete();
    }, 2000);
  }

  async verNotificaciones(pos: any) {
    const tipo = this.notificaciones[pos].type;
    const numeroNotificacion = this.notificaciones[pos].item_id;
    (await this.asmsSrvc.cambioStatusNotificacion(this.codigo, tipo, numeroNotificacion)).subscribe((resp: any) => {
      //console.log(resp);
    });
    if (this.notificaciones[pos].categoria == "Circulares") {
      const codigo = this.notificaciones[pos].item_id;
      const pagina = await this.modalCtrl.create({
        component: DetallesCircularesHijosPage,
        componentProps: {
          codigo,
        }
      });
      await pagina.present();
      this.notificaciones[pos].clase = "leida";
    } /* else if (this.notificaciones[pos].categoria == "Pinboard") {
      const codigoPostit = this.notificaciones[pos].item_id;
      const pagina = await this.modalCtrl.create({
        component: DetallesPostitPadresPage,
        componentProps: {
          codigoPostit,
        }
      });
      await pagina.present();
      this.notificaciones[pos].clase = "leida";
    } */ else if (this.notificaciones[pos].categoria == "Photo Album") {
      const codigo = this.notificaciones[pos].item_id;
      const pagina = await this.modalCtrl.create({
        component: DetallePhotoAlbumHijosPage,
        componentProps: {
          codigo,
        }
      });
      await pagina.present();
      this.notificaciones[pos].clase = "leida";
    } else if (this.notificaciones[pos].categoria == "Tarea") {
      const codigo = this.notificaciones[pos].item_id;
      const alumno = this.notificaciones[pos].cui_alumno;
      const pagina = await this.modalCtrl.create({
        component: DetalleTareaHijosPage,
        componentProps: {
          codigo,
          alumno,
        }
      });
      await pagina.present();
      this.notificaciones[pos].clase = "leida";
    }
  }

  async onIonInfinite(ev: any) {
    this.page = this.page + 1;
    (await this.asmsSrvc.getNotificaciones(this.codigo, this.tipo, this.alumno, this.page)).subscribe((notificaciones: any) => {
      if (Object.prototype.toString.call(notificaciones) === '[object Array]') {
        this.notificaciones.push(...notificaciones);
        console.log(notificaciones);
      } else {
        this.scroll = true;
      }
      (ev).target.complete();
    });
  }

}
