import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallesCircularPadresPage } from './detalles-circular-padres/detalles-circular-padres.page';

@Component({
  selector: 'app-circulares',
  templateUrl: './circulares.page.html',
  styleUrls: ['./circulares.page.scss'],
})
export class CircularesPage implements OnInit {

  datosUsuario: any;
  codigoPadre: string = '';
  tipoUsu: string = '';
  circulares: any[] = [];
  hijos: any[] = [];
  codigoHijos: any[] = [];
  page: number = 0;
  scroll: boolean = false;

  constructor(private asmsSrvc: AsmsServiceService, private strg: Storage, private modalCtrl: ModalController) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigoPadre = this.datosUsuario.tipo_codigo;
    this.tipoUsu = this.datosUsuario.tipo_usuario;
    (await this.asmsSrvc.getHijos(this.tipoUsu, this.codigoPadre)).subscribe(async (hijos: any) => {
      if(Object.prototype.toString.call(hijos) === '[object Array]'){
        this.hijos = hijos;
        for (let i = 0; i < this.hijos.length; i++) {
          this.codigoHijos[i] = this.hijos[i].cui;
        }
        this.codigoHijos.toString();
        (await this.asmsSrvc.getCircularesPadre(this.codigoHijos, this.codigoPadre, this.page)).subscribe((circulares: any) => {
          if(Object.prototype.toString.call(circulares) === '[object Array]'){
            this.circulares = circulares;
          }
        });
      }
    });
  }

  async verCircular(pos: any) {
    const codigo = this.circulares[pos].codigo
    const pagina = await this.modalCtrl.create({
      component: DetallesCircularPadresPage,
      componentProps: {
        codigo,
        codigoPadre: this.codigoPadre,
      }
    });
    await pagina.present();
  }

  async onIonInfinite(ev: any) {
    console.log(ev);
    this.page = this.page + 1;
    (await this.asmsSrvc.getCircularesPadre(this.codigoHijos, this.codigoPadre, this.page)).subscribe((circulares: any) => {
      if (Object.prototype.toString.call(circulares) === '[object Array]') {
        this.circulares.push(...circulares);
      } else {
        this.scroll = true;
      }
      (ev).target.complete();
    });
  }

}
