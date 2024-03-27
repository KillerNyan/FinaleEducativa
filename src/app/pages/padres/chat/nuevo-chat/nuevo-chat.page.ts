import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { MensajesChatPage } from '../mensajes-chat/mensajes-chat.page';

@Component({
  selector: 'app-nuevo-chat',
  templateUrl: './nuevo-chat.page.html',
  styleUrls: ['./nuevo-chat.page.scss'],
})
export class NuevoChatPage implements OnInit {

  @Input() codigo: string = '';
  maestros: any[] = [];

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    (await this.asmsSrvc.getMaestrosChatPadres(this.codigo)).subscribe((maestros: any) => {
      if(Object.prototype.toString.call(maestros) === '[object Array]'){
        this.maestros = maestros;
        console.log(maestros);
      }
    });
  }

  async crearChat(pos: any) {
    const maestro = this.maestros[pos].nombre;
    const tipoUsuMD = this.maestros[pos].tipo;
    const codigoMD = this.maestros[pos].cui;
    const codigo = this.codigo;
    const pagina = await this.modalCtrl.create({
      component: MensajesChatPage,
      componentProps: {
        maestro,
        tipoUsuMD,
        codigoMD,
        codigo,
      }
    });
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss( null, 'confirm' );
  }

}
