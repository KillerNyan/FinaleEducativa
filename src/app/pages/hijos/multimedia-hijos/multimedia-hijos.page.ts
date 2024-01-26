import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { PhotoAlbumHijosPage } from './photo-album-hijos/photo-album-hijos.page';
import { VideosHijosPage } from './videos-hijos/videos-hijos.page';

@Component({
  selector: 'app-multimedia-hijos',
  templateUrl: './multimedia-hijos.page.html',
  styleUrls: ['./multimedia-hijos.page.scss'],
})
export class MultimediaHijosPage implements OnInit {

  imagenes: any;
  photoAlbum: string = '';
  video: string = '';

  constructor( private asmsSrvc: AsmsServiceService, private modalCtrl: ModalController ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getImagenes()).subscribe((imagenes: any) => {
      this.imagenes = imagenes;
      this.photoAlbum = imagenes.data.photoalbum;
      this.video = imagenes.data.videos;
    })
  }

  async verPhotoAlbums(){
    const pagina = await this.modalCtrl.create({
      component: PhotoAlbumHijosPage
    })
    await pagina.present();
  }

  async verVideos() {
    const pagina = await this.modalCtrl.create({
      component: VideosHijosPage
    });
    await pagina.present();
  }

}
