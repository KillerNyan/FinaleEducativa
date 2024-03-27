import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallesPostitPadresPage } from './detalles-postit-padres/detalles-postit-padres.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-pinboard',
  templateUrl: './pinboard.page.html',
  styleUrls: ['./pinboard.page.scss'],
})
export class PinboardPage implements OnInit {

  datosUsuario: any;
  tipoUsu: string = '';
  codigo: string = '';
  postits: any[] = [];
  hijos: any[] = [];
  codigosHijos: any[] = [];
  page: number = 0;
  filtroPos: number = 0;
  scroll: boolean = false;

  constructor( private asmsSrvc: AsmsServiceService, private strg: Storage, private modalCtrl: ModalController ) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.tipoUsu = this.datosUsuario.tipo_usuario;
    this.codigo = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getHijos(this.tipoUsu, this.codigo)).subscribe(async (hijos: any) => {
      if(Object.prototype.toString.call(hijos) === '[object Array]'){
        this.hijos = hijos;
        for (let i = 0; i < this.hijos.length; i++){
          this.codigosHijos[i] = this.hijos[i].cui;
        }
        this.codigosHijos.toString();
        (await this.asmsSrvc.getPinboardPadre(this.codigosHijos, this.page)).subscribe((postits: any) => {
          if(Object.prototype.toString.call(postits) === '[object Array]'){
            this.postits = postits;
          }
        });
      }
    });
  }

  recarga(event: any) {
    setTimeout(async () => {
      (await this.asmsSrvc.getPinboardPadre(this.codigosHijos, this.page)).subscribe((postits: any) => {
        if(Object.prototype.toString.call(postits) === '[object Array]'){
          this.postits = postits;
        }
      });
      event.target.complete();
    }, 2000);
  }

  async filtro(pos: number){
    this.filtroPos = pos;
    this.page = 0;
    if (pos == 0) {
      (await this.asmsSrvc.getPinboardPadre(this.codigosHijos, this.page)).subscribe((postits: any) => {
        if(Object.prototype.toString.call(postits) === '[object Array]'){
          this.postits = postits;
          this.scroll = false;
        }
      });
    } else {
      (await this.asmsSrvc.getPinboardPadre(this.hijos[pos-1].cui, this.page)).subscribe((postits: any) => {
        if(Object.prototype.toString.call(postits) === '[object Array]'){
          this.postits = postits;
          this.scroll = false;
        }
      });
    }
  }

  async detallePostit(pos1: any, pos2: any) {
    const codigoPostit = this.postits[pos1].date_postit[pos2].codigo;
    const pagina = await this.modalCtrl.create({
      component: DetallesPostitPadresPage,
      componentProps: {
        codigoPostit,
      }
    })
    await pagina.present();
  }

  async onIonInfinite(ev: any){
    this.page = this.page + 1;
    const pos = this.filtroPos;
    if (pos == 0) {
      (await this.asmsSrvc.getPinboardPadre(this.codigosHijos, this.page)).subscribe((postits: any) => {
        if (Object.prototype.toString.call(postits) === '[object Array]'){
          this.postits.push(...postits);
        } else {
          this.scroll = true;
        }
        (ev).target.complete();
      });
    } else {
      (await this.asmsSrvc.getPinboardPadre(this.hijos[pos-1].cui, this.page)).subscribe((postits: any) => {
        if (Object.prototype.toString.call(postits) === '[object Array]'){
          this.postits.push(...postits);
        } else {
          this.scroll = true;
        }
        (ev).target.complete();
      });
    }
  }

}
