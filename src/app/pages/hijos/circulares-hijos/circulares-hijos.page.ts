import { Component, OnInit } from '@angular/core';
import { AsmsServiceService } from '../../../services/asms-service.service';
import { Storage } from '@ionic/storage-angular';
import { ModalController } from '@ionic/angular';
import { DetallesCircularesHijosPage } from './detalles-circulares-hijos/detalles-circulares-hijos.page';

@Component({
  selector: 'app-circulares-hijos',
  templateUrl: './circulares-hijos.page.html',
  styleUrls: ['./circulares-hijos.page.scss'],
})
export class CircularesHijosPage implements OnInit {

  datosUsuario: any;
  circulares: any[] = [];
  codigoAlu: string = '';
  autorizador: number = 0;
  page: number = 0;
  scroll: boolean = false;

  constructor(private asmsSrvc: AsmsServiceService, private strg: Storage, private modalCtrl: ModalController) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigoAlu = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getCircularesAlumnos(this.codigoAlu, this.autorizador, this.page)).subscribe((circulares: any) => {
      if(Object.prototype.toString.call(circulares) === '[object Array]'){
        this.circulares = circulares;
      }
    });
  }

  async verCircular(pos: any) {
    const codigo = this.circulares[pos].codigo;
    this.autorizador = 1;
    const pagina = await this.modalCtrl.create({
      component: DetallesCircularesHijosPage,
      componentProps: {
        codigo,
        autorizador: this.autorizador,
      }
    });
    await pagina.present();
  }

  async onIonInfinite(ev: any) {
    this.page = this.page + 1;
    (await this.asmsSrvc.getCircularesAlumnos(this.codigoAlu, this.autorizador, this.page)).subscribe((circulares: any) => {
      if (Object.prototype.toString.call(circulares) === '[object Array]') {
        this.circulares.push(...circulares);
      } else {
        this.scroll = true;
      }
      (ev).target.complete();
    });
  }

}
