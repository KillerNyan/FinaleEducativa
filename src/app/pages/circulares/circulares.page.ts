import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { CircularPage } from '../circular/circular.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-circulares',
  templateUrl: './circulares.page.html',
  styleUrls: ['./circulares.page.scss'],
})
export class CircularesPage implements OnInit {

  datosUsuario: any;
  codigoMaestro: string = '';
  page: number = 0;
  circulares: any[] = [];
  scroll: boolean = false;

  constructor( private asmsSrvc: AsmsServiceService, private strg: Storage, private modalCtrl: ModalController ) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigoMaestro = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getCirculares(this.codigoMaestro, this.page)).subscribe( (circulares: any) => {
      if(Object.prototype.toString.call(circulares) === '[object Array]'){
        this.circulares = circulares;
      }
    })
  }

  async abrirCircular(pos: any) {
    const codigo = this.circulares[pos].codigo;
    const circular = await this.modalCtrl.create({
      component: CircularPage,
      componentProps: {
        codigo,
      }
    })
    await circular.present();
  }

  async onIonInfinite(ev: any) {
    this.page = this.page + 1;
    (await this.asmsSrvc.getCirculares(this.codigoMaestro, this.page)).subscribe((circulares: any) => {
      if (Object.prototype.toString.call(circulares) === '[object Array]') {
        this.circulares.push(...circulares);
      } else {
        this.scroll = true;
      }
      (ev).target.complete();
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }
}
