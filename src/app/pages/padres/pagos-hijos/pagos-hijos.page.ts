import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallePagosPage } from './detalle-pagos/detalle-pagos.page';

@Component({
  selector: 'app-pagos-hijos',
  templateUrl: './pagos-hijos.page.html',
  styleUrls: ['./pagos-hijos.page.scss'],
})
export class PagosHijosPage implements OnInit {

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
    (await this.asmsSrvc.getHijosPagos(this.tipoUsuario, this.codigoPadre)).subscribe((hijos: any) => {
      if(Object.prototype.toString.call(hijos) === '[object Array]'){
        this.hijos = hijos;
      }
    })
  }

  async verPagos(pos: any) {
    const codigoHijo = this.hijos[pos].codigo_unico;
    const imgHijo = this.hijos[pos].url_foto;
    const nombreHijo = this.hijos[pos].nombre;
    const apellidoHijo = this.hijos[pos].apellido;
    const pagina = await this.modalCtrl.create({
      component: DetallePagosPage,
      componentProps: {
        codigoHijo,
        imgHijo,
        nombreHijo,
        apellidoHijo
      }
    });
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
