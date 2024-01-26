import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PhotoAlbumPadresPage } from './photo-album-padres/photo-album-padres.page';
import { VideosPadrePage } from './videos-padre/videos-padre.page';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.page.html',
  styleUrls: ['./multimedia.page.scss'],
})
export class MultimediaPage implements OnInit {

  imagenes: any;
  photoAlbum: string = '';
  video: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getImagenes()).subscribe((imagenes: any) => {
      this.imagenes = imagenes;
      this.photoAlbum = imagenes.data.photoalbum;
      this.video = imagenes.data.videos;
    })
  }

  async verPhotoAlbums(){
    const pagina = await this.modalCtrl.create({
      component: PhotoAlbumPadresPage
    })
    await pagina.present();
  }

  async verVideos() {
    const pagina = await this.modalCtrl.create({
      component: VideosPadrePage
    });
    await pagina.present();
  }

}
