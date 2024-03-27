import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { MensajesChatMaestrosPage } from './mensajes-chat-maestros/mensajes-chat-maestros.page';
import { SeccionesChatMDPage } from './secciones-chat-md/secciones-chat-md.page';

@Component({
  selector: 'app-chats-maestros',
  templateUrl: './chats-maestros.page.html',
  styleUrls: ['./chats-maestros.page.scss'],
})
export class ChatsMaestrosPage implements OnInit {

  datosUsuario: any;
  codigo: string = '';
  tipoUsu: string = '';
  chats: any[] = [];

  constructor( private modalCtrl: ModalController, private strg: Storage, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigo = this.datosUsuario.tipo_codigo;
    this.tipoUsu = this.datosUsuario.tipo_usuario;
    (await this.asmsSrvc.getChatsPadres(this.codigo, this.tipoUsu)).subscribe((chats: any) => {
      if(Object.prototype.toString.call(chats) === '[object Array]'){
        this.chats = chats;
        console.log(chats);
      }
    });
  }

  async nuevoChat() {
    const codigo = this.codigo;
    const tipoUsu = this.tipoUsu;
    const pagina = await this.modalCtrl.create({
      component: SeccionesChatMDPage,
      componentProps: {
        codigo,
        tipoUsu,
      }
    });
    await pagina.present();

    const { data, role } = await pagina.onDidDismiss();
    console.log(role);
    if (role === 'confirm') {
      (await this.asmsSrvc.getChatsPadres(this.codigo, this.tipoUsu)).subscribe((chats: any) => {
        if(Object.prototype.toString.call(chats) === '[object Array]'){
          this.chats = chats;
          console.log(chats);
        }
      });
    }
  }

  async verChat(pos: any) {
    const padre = this.chats[pos].nombre_otro_usuario;
    const chat = this.chats[pos].dialogo;
    const codigo = this.codigo;
    const pagina = await this.modalCtrl.create({
      component: MensajesChatMaestrosPage,
      componentProps: {
        padre,
        chat,
        codigo,
      }
    });
    await pagina.present();

    const { data, role } = await pagina.onDidDismiss();
    console.log(role);
    if (role === 'confirm') {
      (await this.asmsSrvc.getChatsPadres(this.codigo, this.tipoUsu)).subscribe((chats: any) => {
        if(Object.prototype.toString.call(chats) === '[object Array]'){
          this.chats = chats;
          console.log(chats);
        }
      });
    }
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
