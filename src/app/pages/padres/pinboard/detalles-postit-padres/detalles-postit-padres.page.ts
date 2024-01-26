import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VerImagenesPage } from 'src/app/pages/ver-imagenes/ver-imagenes.page';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-detalles-postit-padres',
  templateUrl: './detalles-postit-padres.page.html',
  styleUrls: ['./detalles-postit-padres.page.scss'],
})
export class DetallesPostitPadresPage implements OnInit {

  detallesPostit: any[] = [];
  imagenes: any[] = [];
  @Input() codigoPostit: string = '';
  target: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetallePostItPadres(this.codigoPostit)).subscribe((detalles: any) => {
      if(Object.prototype.toString.call(detalles) === '[object Array]'){
        this.detallesPostit = detalles;
        this.target = this.detallesPostit[0].target
      }
    })
  }

  async verImg() {
    const photo = false;
    const imagenP = true;
    const imagen = false;
    this.imagenes = [];
    this.imagenes.push(this.detallesPostit[0].imagenes);
    const pagina = await this.modalCtrl.create({
      component: VerImagenesPage,
      componentProps: {
        photos: this.imagenes,
        photo,
        imagen,
        imagenP
      }
    })
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
