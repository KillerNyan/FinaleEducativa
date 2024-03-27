import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { MensajesChatMaestrosPage } from '../../mensajes-chat-maestros/mensajes-chat-maestros.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-padres-chat-md',
  templateUrl: './padres-chat-md.page.html',
  styleUrls: ['./padres-chat-md.page.scss'],
})
export class PadresChatMDPage implements OnInit {

  datosUsuario: any;
  codigo: string = '';
  @Input() nivel: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  padres: any[] = [];

  constructor( private modalCtrl: ModalController, private strg: Storage, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigo = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getPadresChat(this.nivel, this.grado, this.seccion)).subscribe((padres: any) => {
      if(Object.prototype.toString.call(padres) === '[object Array]'){
        this.padres = padres;
        console.log(padres);
      }
    });
  }

  async crearChat(pos: any) {
    const padre = this.padres[pos].nombre;
    const tipoUsuP = this.padres[pos].tipo;
    const codigoP = this.padres[pos].cui;
    const codigo = this.codigo;
    const pagina = await this.modalCtrl.create({
      component: MensajesChatMaestrosPage,
      componentProps: {
        padre,
        tipoUsuP,
        codigoP,
        codigo,
      }
    });
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
