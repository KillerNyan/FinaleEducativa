import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VerImagenesPage } from 'src/app/pages/ver-imagenes/ver-imagenes.page';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-detalle-photo-album-hijos',
  templateUrl: './detalle-photo-album-hijos.page.html',
  styleUrls: ['./detalle-photo-album-hijos.page.scss'],
})
export class DetallePhotoAlbumHijosPage implements OnInit {

  detalles: any[] = [];
  photos: any[] = [];
  @Input() codigo: number = 0;

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetallePhotoAlbumAlumnos(this.codigo)).subscribe((detalles:any) => {
      if(Object.prototype.toString.call(detalles) === '[object Array]'){
        this.detalles = detalles;
      }
    })
  }

  async verImgs(){
    const photo = true;
    const imagen = false;
    this.photos = [];
    this.photos.push(this.detalles[0].imagenes);
    const pagina = this.modalCtrl.create({
      component: VerImagenesPage,
      componentProps: {
        photos: this.photos,
        photo,
        imagen
      }
    });
    (await pagina).present();
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

}
