import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { VerImagenesPage } from '../../ver-imagenes/ver-imagenes.page';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-detalle-photo-album',
  templateUrl: './detalle-photo-album.page.html',
  styleUrls: ['./detalle-photo-album.page.scss'],
})
export class DetallePhotoAlbumPage implements OnInit {

  detalles: any[] = [];
  photos: any[] = [];
  @Input() codigo: number = 0;

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetallesPhotoAlbumPadre(this.codigo)).subscribe((detalles:any) => {
      if(Object.prototype.toString.call(detalles) === '[object Array]'){
        this.detalles = detalles;
        //console.log(detalles);
      }
    });
  }

  async verImgs(noImg: number){
    const img = this.detalles[0].imagenes[noImg].foto;
    const pagina = this.modalCtrl.create({
      component: VerImagenesPage,
      componentProps: {
        img,
      }
    });
    (await pagina).present();
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

}
