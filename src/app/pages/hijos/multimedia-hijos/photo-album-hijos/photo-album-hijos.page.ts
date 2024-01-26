import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallePhotoAlbumHijosPage } from './detalle-photo-album-hijos/detalle-photo-album-hijos.page';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-photo-album-hijos',
  templateUrl: './photo-album-hijos.page.html',
  styleUrls: ['./photo-album-hijos.page.scss'],
})
export class PhotoAlbumHijosPage implements OnInit {

  datosUsuario: any;
  tipoUsu: string = '';
  codigoUsu: string = '';
  page: number = 0;
  photoAlbums: any[] = [];
  scroll: boolean = false;

  constructor( private strg: Storage, private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.tipoUsu = this.datosUsuario.tipo_usuario;
    this.codigoUsu = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getPhotoAlbumAlumnos(this.tipoUsu, this.codigoUsu, this.page)).subscribe((albums: any) => {
      if(Object.prototype.toString.call(albums) === '[object Array]'){
        this.photoAlbums = albums;
      }
    })
  }

  async verPhotoAlbum(pos: any){
    const codigo = this.photoAlbums[pos].codigo;
    const pagina = await this.modalCtrl.create({
      component: DetallePhotoAlbumHijosPage,
      componentProps: {
        codigo
      }
    });
    await pagina.present();
  }

  async onIonInfinite(ev: any) {
    this.page = this.page + 1;
    (await this.asmsSrvc.getPhotoAlbumPadre(this.tipoUsu, this.codigoUsu, this.page)).subscribe((albums: any) => {
      if (Object.prototype.toString.call(albums) === '[object Array]') {
        this.photoAlbums.push(...albums);
      } else {
        this.scroll = true;
      }
      (ev).target.complete();
    });
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

}
