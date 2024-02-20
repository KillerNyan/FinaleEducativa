import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { NuevoChatPPage } from './nuevo-chat-p/nuevo-chat-p.page';
import { MensajesPPage } from './mensajes-p/mensajes-p.page';

@Component({
  selector: 'app-chats-p',
  templateUrl: './chats-p.page.html',
  styleUrls: ['./chats-p.page.scss'],
})
export class ChatsPPage implements OnInit {

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
    const pagina = await this.modalCtrl.create({
      component: NuevoChatPPage,
      componentProps: {
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

  async verChat(pos: any) {
    const maestro = this.chats[pos].nombre_otro_usuario;
    const chat = this.chats[pos].dialogo;
    const codigo = this.codigo;
    const pagina = await this.modalCtrl.create({
      component: MensajesPPage,
      componentProps: {
        maestro,
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
