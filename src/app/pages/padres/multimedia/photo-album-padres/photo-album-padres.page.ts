import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

import { DetallesPhAlPadrePage } from './detalles-ph-al-padre/detalles-ph-al-padre.page';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-photo-album-padres',
  templateUrl: './photo-album-padres.page.html',
  styleUrls: ['./photo-album-padres.page.scss'],
})
export class PhotoAlbumPadresPage implements OnInit {

  datosUsuario: any;
  tipoUsu: string = '';
  codigoUsu: string = '';
  page: number = 0;
  photoAlbums: any[] = [];
  photos: any[] = [];
  scroll: boolean = false;

  constructor( private strg: Storage, private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.tipoUsu = this.datosUsuario.tipo_usuario;
    this.codigoUsu = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getPhotoAlbumPadre(this.tipoUsu, this.codigoUsu, this.page)).subscribe((albums: any) => {
      if(Object.prototype.toString.call(albums) === '[object Array]'){
        this.photoAlbums = albums;
      }
    });
  }

  async verPhotoAlbum(pos: any){
    const codigo = this.photoAlbums[pos].codigo;
    const pagina = await this.modalCtrl.create({
      component: DetallesPhAlPadrePage,
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
