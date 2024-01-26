import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-detalles-circulares-hijos',
  templateUrl: './detalles-circulares-hijos.page.html',
  styleUrls: ['./detalles-circulares-hijos.page.scss'],
})
export class DetallesCircularesHijosPage implements OnInit {

  circulares: any[] = [];
  @Input() codigo: string = '';
  @Input() autorizador: number = 0;
  
  constructor( private modalCtrl: ModalController, private strg: Storage, private toastCtrl: ToastController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetalleCircularesAlumnos(this.codigo, this.autorizador)).subscribe((circulares: any) => {
      if(Object.prototype.toString.call(circulares) === '[object Array]'){
        this.circulares = circulares;
      }
    })
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
