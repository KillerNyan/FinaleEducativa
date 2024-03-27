import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetalleReportePage } from './detalle-reporte/detalle-reporte.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-lista-reportes',
  templateUrl: './lista-reportes.page.html',
  styleUrls: ['./lista-reportes.page.scss'],
})
export class ListaReportesPage implements OnInit {

  datosUsuario: any;
  codigoUsuario: string = '';
  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() foto: string = '';
  @Input() codigoH: string = '';
  @Input() tipo: number = 0;
  reportes: any[] = [];

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, private strg: Storage, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigoUsuario = this.datosUsuario.codigo;
    if (this.tipo === 7) {
      (await this.asmsSrvc.getReportesPañal(this.codigoH)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.reportes = resp;
          console.log(resp);
        }
      });
    } else if (this.tipo === 8) {
      (await this.asmsSrvc.getReportesGolpe(this.codigoH)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.reportes = resp;
          console.log(resp);
        }
      });
    } else if (this.tipo === 9) {
      (await this.asmsSrvc.getReportesEnfermedad(this.codigoH)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.reportes = resp;
          console.log(resp);
        }
      });
    } else if (this.tipo === 10) {
      (await this.asmsSrvc.getReportesConducta(this.codigoH)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.reportes = resp;
          console.log(resp);
        }
      });
    }
  }

  async verDetalles(pos: any) {
    const tipo = this.tipo;
    const codigo = this.reportes[pos].codigo;
    (await this.asmsSrvc.cambioStatusNotificacion(this.codigoUsuario, tipo, codigo)).subscribe((resp: any) => {
      if (resp.status != 'success') {
        this.presentToast('No se pudo marcar como leido', 'light');
      }
      //console.log(resp);
    });
    const pagina = await this.modalCtrl.create({
      component: DetalleReportePage,
      componentProps: {
        tipo,
        codigo,
      }
    });
    await pagina.present();
  }

  async presentToast(msg: string, cl: string, pos: any = "bottom") {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: pos,
      color: cl,
    });
    await toast.present();
  }

  cerrar() {
    this.modalCtrl.dismiss( null, 'confirm');
  }

}
