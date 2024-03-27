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

  @Input() img: string = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  descargar(){
    window.open(this.img, '_system');
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
