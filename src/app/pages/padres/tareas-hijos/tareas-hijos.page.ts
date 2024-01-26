import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { TareasPendPadresPage } from './tareas-pend-padres/tareas-pend-padres.page';

@Component({
  selector: 'app-tareas-hijos',
  templateUrl: './tareas-hijos.page.html',
  styleUrls: ['./tareas-hijos.page.scss'],
})
export class TareasHijosPage implements OnInit {

  datosUsuario: any;
  tipoUsuario: string = '';
  codigoPadre: string = '';
  fotoPadre: string = '';
  nombrePadre: string = '';
  hijos: any[] = [];

  constructor(private modalCtrl: ModalController, private strg: Storage, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.tipoUsuario = this.datosUsuario.tipo_usuario;
    this.codigoPadre = this.datosUsuario.tipo_codigo;
    this.fotoPadre = this.datosUsuario.url_foto;
    this.nombrePadre = this.datosUsuario.nombre;
    (await this.asmsSrvc.getHijosActividades(this.tipoUsuario, this.codigoPadre)).subscribe((hijos: any) => {
      if(Object.prototype.toString.call(hijos) === '[object Array]'){
        this.hijos = hijos;
      }
    })
  }

  async verTareas(pos: any) {
    const codigoHijo = this.hijos[pos].codigo_unico;
    const pagina = await this.modalCtrl.create({
      component: TareasPendPadresPage,
      componentProps: {
        codigoHijo,
      }
    });
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
