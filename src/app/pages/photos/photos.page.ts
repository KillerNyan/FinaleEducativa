import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController, LoadingController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

import { register } from 'swiper/element/bundle';
import { VerImagenesPage } from '../ver-imagenes/ver-imagenes.page';
import { Storage } from '@ionic/storage-angular';
import { DetallePhotoAlbumPage } from './detalle-photo-album/detalle-photo-album.page';
import { NuevoPhotoAlbumPage } from './nuevo-photo-album/nuevo-photo-album.page';

register();

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  datosUsuario: any;
  tipoUsu: string = '';
  codigoUsu: string = '';
  photoAlbums: any[] = [];
  photos: any[] = [];
  page: number = 0;
  scroll: boolean = false;

  constructor(private asmsSrvc: AsmsServiceService, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private toastCtrl: ToastController, private strg: Storage, private modalCtrl: ModalController) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.tipoUsu = this.datosUsuario.tipo_usuario;
    this.codigoUsu = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getAlbumes(this.tipoUsu, this.codigoUsu, this.page)).subscribe((photoAlbums: any) => {
      if(Object.prototype.toString.call(photoAlbums) === '[object Array]'){
        this.photoAlbums = photoAlbums;
      }
    });
  }

  async add() {
    const nuevo = await this.modalCtrl.create({
      component: NuevoPhotoAlbumPage,
      componentProps: {
      }
    })
    await nuevo.present();

    const { data, role } = await nuevo.onWillDismiss();
    console.log(role);
    if (role === 'confirm') {
      this.page = 0;
      (await this.asmsSrvc.getAlbumes(this.tipoUsu, this.codigoUsu, this.page)).subscribe((photoAlbums: any) => {
        if(Object.prototype.toString.call(photoAlbums) === '[object Array]'){
          this.photoAlbums = photoAlbums;
          console.log(photoAlbums);
        }
      });
    }
  }

  async verPhotoAlbum(pos: any) {
    const codigo = this.photoAlbums[pos].codigo;
    const pagina = await this.modalCtrl.create({
      component: DetallePhotoAlbumPage,
      componentProps: {
        codigo
      }
    });
    await pagina.present();
  }

  async eliminar(pos: any) {
    const codigo = this.photoAlbums[pos].codigo;
    (await this.asmsSrvc.EliminarAlbum(codigo)).subscribe(async (resp: any) => {
      const loading = await this.loadingCtrl.create({
        message: 'Eliminando Post It',
        duration: 1000,
      });
      loading.present();
      this.presentToast(resp.message, 'light');
    });
    this.page = 0;
    (await this.asmsSrvc.getAlbumes(this.tipoUsu, this.codigoUsu, this.page)).subscribe((photoAlbums: any) => {
      if(Object.prototype.toString.call(photoAlbums) === '[object Array]'){
        this.photoAlbums = photoAlbums;
      }
    });
  }

  async presentAlert(pos: any) {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: 'Esta seguro que quiere Eliminar este Photo Album?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },  {
        text: 'Confirmar',
        role: 'confirm',
        cssClass: 'alert-button-confirm',
        handler: () => {
          this.eliminar(pos)
        },
      }],
    });
    await alert.present();
  }

  async presentToast(msg: string, cl: string, pos: any = "bottom") {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: pos,
      color: cl,
    });
    await toast.present();
  }

  async onIonInfinite(ev: any) {
    this.page = this.page + 1;
    (await this.asmsSrvc.getAlbumes(this.tipoUsu, this.codigoUsu, this.page)).subscribe((albums: any) => {
      if (Object.prototype.toString.call(albums) === '[object Array]') {
        this.photoAlbums.push(...albums);
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
