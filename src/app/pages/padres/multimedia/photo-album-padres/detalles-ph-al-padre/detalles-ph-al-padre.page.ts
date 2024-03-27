import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VerImagenesPage } from 'src/app/pages/ver-imagenes/ver-imagenes.page';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-detalles-ph-al-padre',
  templateUrl: './detalles-ph-al-padre.page.html',
  styleUrls: ['./detalles-ph-al-padre.page.scss'],
})
export class DetallesPhAlPadrePage implements OnInit {

  detalles: any[] = [];
  photos: any[] = [];
  @Input() codigo: number = 0;

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetallesPhotoAlbumPadre(this.codigo)).subscribe((detalles:any) => {
      if(Object.prototype.toString.call(detalles) === '[object Array]'){
        this.detalles = detalles;
        console.log(detalles);
      }
    })
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
    /* this.photos = [];
    this.photos.push(this.detalles[0].imagenes);
    const pagina = this.modalCtrl.create({
      component: VerImagenesPage,
      componentProps: {
        photos: this.photos,
        photo,
        imagen
      }
    });
    (await pagina).present(); */
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

}
