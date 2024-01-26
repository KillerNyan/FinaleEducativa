import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-ver-imagenes',
  templateUrl: './ver-imagenes.page.html',
  styleUrls: ['./ver-imagenes.page.scss'],
})
export class VerImagenesPage implements OnInit {

  @Input() photos: any[] = [];
  @Input() photo: boolean = false;
  @Input() imagen: boolean = false;
  @Input() imagenP: boolean = false;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  descargar(photos: any){
    let tiempo = 500;
    for(let i = 0; i < photos.length; i++) {
      let url = photos[i].foto;
      setTimeout(() => {
        window.open(url, '_system');
      }, tiempo);
      tiempo = tiempo + 1500;
    }
  }

  descargar2(photos: any){
    let tiempo = 500
    for(let i = 0; i < photos.length; i++) {
      let url = photos[i].imagen_url;
      setTimeout(() => {
        window.open(url, '_system');
      }, tiempo)
      tiempo = tiempo + 1500
    }
  }

  cerrar() {
    this.photo = false;
    this.imagen = false;
    this.imagenP = false;
    this.modalCtrl.dismiss();
  }

}
