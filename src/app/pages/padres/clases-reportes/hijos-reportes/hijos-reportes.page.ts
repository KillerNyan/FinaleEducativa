import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { ListaReportesPage } from './lista-reportes/lista-reportes.page';

@Component({
  selector: 'app-hijos-reportes',
  templateUrl: './hijos-reportes.page.html',
  styleUrls: ['./hijos-reportes.page.scss'],
})
export class HijosReportesPage implements OnInit {

  datosUsuario: any;
  codigo: string = '';
  usuario: string = '';
  usuCodigo: string = '';
  @Input() tipo: number = 0;
  contador: string = '';
  hijos: any[] = [];

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService, private strg: Storage) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigo = this.datosUsuario.tipo_codigo;
    this.usuario = this.datosUsuario.tipo_usuario;
    this.usuCodigo = this.datosUsuario.codigo;
    (await this.asmsSrvc.getHijosReportes(this.usuario, this.codigo, this.usuCodigo)).subscribe((resp: any) => {
      if (Object.prototype.toString.call(resp) === '[object Array]') {
        this.hijos = resp;
        //console.log(resp);
      }
    });
  }

  async verLista(pos: any) {
    const nombre = this.hijos[pos].nombre;
    const apellido = this.hijos[pos].apellido;
    const foto = this.hijos[pos].url_foto;
    const codigoH = this.hijos[pos].cui;
    const tipo = this.tipo
    const pagina = await this.modalCtrl.create({
      component: ListaReportesPage,
      componentProps: {
        codigoH,
        tipo,
        nombre,
        apellido,
        foto,
      }
    });
    await pagina.present();

    const { data, role } = await pagina.onWillDismiss();
    //console.log(role);
    if (role === 'confirm') {
      (await this.asmsSrvc.getHijosReportes(this.usuario, this.codigo, this.usuCodigo)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.hijos = resp;
          //console.log(resp);
        }
      });
    }
  }

  cerrar() {
    this.modalCtrl.dismiss( null, 'confirm' );
  }

}
