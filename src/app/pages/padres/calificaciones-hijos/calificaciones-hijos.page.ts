import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { CalificacionesTiposPage } from './calificaciones-tipos/calificaciones-tipos.page';

@Component({
  selector: 'app-calificaciones-hijos',
  templateUrl: './calificaciones-hijos.page.html',
  styleUrls: ['./calificaciones-hijos.page.scss'],
})
export class CalificacionesHijosPage implements OnInit {

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
    (await this.asmsSrvc.getHijosCalificaciones(this.tipoUsuario, this.codigoPadre)).subscribe((hijos: any) => {
      if(Object.prototype.toString.call(hijos) === '[object Array]'){
        this.hijos = hijos;
        //console.log(hijos);
      }
    })
  }

  async verTipos(pos: any) {
    const codigoHijo = this.hijos[pos].tipo_codigo;
    const imgHijo = this.hijos[pos].url_foto;
    const nombreHijo = this.hijos[pos].nombre;
    const apellidoHijo = this.hijos[pos].apellido;
    const nivel = this.hijos[pos].seccion[0].nivel;
    const grado = this.hijos[pos].seccion[0].grado;
    const pagina = await this.modalCtrl.create({
      component: CalificacionesTiposPage,
      componentProps: {
        codigoHijo,
        imgHijo,
        nombreHijo,
        apellidoHijo,
        nivel,
        grado,
      }
    });
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
