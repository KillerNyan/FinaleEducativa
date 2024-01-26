import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallesCircularPadresPage } from '../circulares/detalles-circular-padres/detalles-circular-padres.page';
import { DetallesPostitPadresPage } from '../pinboard/detalles-postit-padres/detalles-postit-padres.page';
import { DetallesPhAlPadrePage } from '../multimedia/photo-album-padres/detalles-ph-al-padre/detalles-ph-al-padre.page';
import { DetalleTareaPadresPage } from '../tareas-hijos/tareas-pend-padres/detalle-tarea-padres/detalle-tarea-padres.page';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  notificaciones: any[] = [];
  hijos: any[] = [];
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
      if(Object.prototype.toString.call(notificaciones) === '[object Array]'){
        this.notificaciones = notificaciones;
      }
    });
    (await this.asmsSrvc.getHijos(this.tipoUsu, this.codigo)).subscribe((hijos: any) => {
      if(Object.prototype.toString.call(hijos) === '[object Array]'){
        this.hijos = hijos;
      }
    });
  }

  async verNotificaciones(pos: any) {
    if (this.notificaciones[pos].categoria == "Circulares") {
      const codigo = this.notificaciones[pos].item_id;
      const pagina = await this.modalCtrl.create({
        component: DetallesCircularPadresPage,
        componentProps: {
          codigo,
        }
      });
      await pagina.present();
      this.notificaciones[pos].clase = "leida";
    } else if (this.notificaciones[pos].categoria == "Pinboard") {
      const codigoPostit = this.notificaciones[pos].item_id;
      const pagina = await this.modalCtrl.create({
        component: DetallesPostitPadresPage,
        componentProps: {
          codigoPostit,
        }
      });
      await pagina.present();
      this.notificaciones[pos].clase = "leida";
    } else if (this.notificaciones[pos].categoria == "Photo Album") {
      const codigo = this.notificaciones[pos].item_id;
      const pagina = await this.modalCtrl.create({
        component: DetallesPhAlPadrePage,
        componentProps: {
          codigo,
        }
      });
      await pagina.present();
      this.notificaciones[pos].clase = "leida";
    } else if (this.notificaciones[pos].categoria == "Tarea") {
      const codigo = this.notificaciones[pos].item_id;
      const hijo = this.notificaciones[pos].cui_alumno;
      const status = this.notificaciones[pos].status;
      const pagina = await this.modalCtrl.create({
        component: DetalleTareaPadresPage,
        componentProps: {
          codigo,
          hijo,
          status,
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
      } else {
        this.scroll = true;
      }
      (ev).target.complete();
    });
  }

}
