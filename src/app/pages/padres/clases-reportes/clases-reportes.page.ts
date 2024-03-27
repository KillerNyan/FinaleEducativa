import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { HijosReportesPage } from './hijos-reportes/hijos-reportes.page';

@Component({
  selector: 'app-clases-reportes',
  templateUrl: './clases-reportes.page.html',
  styleUrls: ['./clases-reportes.page.scss'],
})
export class ClasesReportesPage implements OnInit {

  datosUsuario: any;
  codigo: string = '';
  usuario: string = '';
  usuCodigo: string = '';
  hijos: any[] = [];
  //los contadores corresponden al tipo de Reporte para pintar el badge
  contador7: number = 0;
  contador8: number = 0;
  contador9: number = 0;
  contador10: number = 0;

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
        for (let i = 0; i < resp.length; i++) {
          //itera los hijos que tenga el padre para obtenet el número total de reportes sin leer de cada tipo de reporte para pintar el badge
          //tipo 7 corresponde a Reporte de Pañal
          this.contador7 += resp[i].notificaciones[0].tipo7;
          //tipo 8 corresponde a Reporte de Goilpe
          this.contador8 += resp[i].notificaciones[0].tipo8;
          //tipo 9 corresponde a Reporte de Enfermedad
          this.contador9 += resp[i].notificaciones[0].tipo9;
          //tipo 10 corresponde a Reporte de Conducta
          this.contador10 += resp[i].notificaciones[0].tipo10;
        }
      }
    });
  }

  async verHijos(tipo: any) {
    const pagina = await this.modalCtrl.create({
      component: HijosReportesPage,
      componentProps: {
        tipo,
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
          this.contador7 = 0;
          this.contador8 = 0;
          this.contador9 = 0;
          this.contador10 = 0;
          for (let i = 0; i < resp.length; i++) {
            //itera los hijos que tenga el padre para obtenet el número total de reportes sin leer de cada tipo de reporte para pintar el badge
            //tipo 7 corresponde a Reporte de Pañal
            this.contador7 += resp[i].notificaciones[0].tipo7;
            //tipo 8 corresponde a Reporte de Goilpe
            this.contador8 += resp[i].notificaciones[0].tipo8;
            //tipo 9 corresponde a Reporte de Enfermedad
            this.contador9 += resp[i].notificaciones[0].tipo9;
            //tipo 10 corresponde a Reporte de Conducta
            this.contador10 += resp[i].notificaciones[0].tipo10;
          }
        }
      });
    }
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
