import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { MensajesChatMaestrosPage } from '../mensajes-chat-maestros/mensajes-chat-maestros.page';
import { PadresChatMDPage } from './padres-chat-md/padres-chat-md.page';

@Component({
  selector: 'app-secciones-chat-md',
  templateUrl: './secciones-chat-md.page.html',
  styleUrls: ['./secciones-chat-md.page.scss'],
})
export class SeccionesChatMDPage implements OnInit {

  @Input() codigo: string = '';
  @Input() tipoUsu: string = '';
  secciones: any[] = [];
  nivel: string = '';
  grado: string = '';
  seccion: string = '';
  imagenes: any[] = [];
  imgChat: string = '';

  constructor(private asmsSrvc: AsmsServiceService, private modalCtrl: ModalController, private storage: Storage) { }

  async ngOnInit() {
    (await this.asmsSrvc.getSeccionesChat(this.tipoUsu, this.codigo)).subscribe((secciones: any) => {
      if(Object.prototype.toString.call(secciones) === '[object Array]'){
        console.log(secciones);
        this.secciones = secciones;
      }
    });
    (await this.asmsSrvc.getImagenes()).subscribe((imagenes: any) => {
      this.imagenes = imagenes;
      console.log(imagenes);
      this.imgChat = imagenes.data.chat;
    });
  }

  async verPadres(pos: any) {
    const nivel = this.secciones[pos].nivel;
    const grado = this.secciones[pos].grado;
    const seccion = this.secciones[pos].seccion;
    const pagina = await this.modalCtrl.create({
      component: PadresChatMDPage,
      componentProps: {
        nivel,
        grado,
        seccion,
      }
    });
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss( null, 'confirm' );
  }

}
