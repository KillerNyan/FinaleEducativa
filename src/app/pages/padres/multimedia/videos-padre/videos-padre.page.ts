import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallesVideosPadrePage } from './detalles-videos-padre/detalles-videos-padre.page';

@Component({
  selector: 'app-videos-padre',
  templateUrl: './videos-padre.page.html',
  styleUrls: ['./videos-padre.page.scss'],
})
export class VideosPadrePage implements OnInit {

  videos: any[] = [];
  tipo: string = '';
  categoria: string = '';
  orden: number = 0;
  page: number = 0;
  scroll: boolean = false;

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    (await this.asmsSrvc.getVideosPadre(this.tipo, this.categoria, this.orden, this.page)).subscribe((videos: any) => {
      if(Object.prototype.toString.call(videos) === '[object Array]'){
        this.videos = videos;
      }
    });
  }

  async filtroTipo(tipo: string) {
    this.page = 0;
    this.tipo = tipo;
    (await this.asmsSrvc.getVideosPadre(this.tipo, this.categoria, this.orden, this.page)).subscribe((videos: any) => {
      if(Object.prototype.toString.call(videos) === '[object Array]'){
        this.videos = videos;
        this.scroll = false;
      }
    });
  }

  async filtroCategoria(categoria: string) {
    this.page = 0;
    this.categoria = categoria;
    (await this.asmsSrvc.getVideosPadre(this.tipo, this.categoria, this.orden, this.page)).subscribe((videos: any) => {
      if(Object.prototype.toString.call(videos) === '[object Array]'){
        this.videos = videos;
        this.scroll = false;
      }
    });
  }

  async filtroOrden(orden: any) {
    this.page = 0;
  }

  async verDetalleVideo(pos: any) {
    const codigo = this.videos[pos].codigo;
    const pagina = await this.modalCtrl.create({
      component: DetallesVideosPadrePage,
      componentProps: {
        codigo,
      }
    });
    await pagina.present();
  }

  async onIonInfinite(ev: any) {
    this.page = this.page + 1;
    (await this.asmsSrvc.getVideosPadre(this.tipo, this.categoria, this.orden, this.page)).subscribe((videos: any) => {
      if (Object.prototype.toString.call(videos) === '[object Array]') {
        this.videos.push(...videos);
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
