import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-detalle-reporte',
  templateUrl: './detalle-reporte.page.html',
  styleUrls: ['./detalle-reporte.page.scss'],
})
export class DetalleReportePage implements OnInit {

  @Input() codigo: string = '';
  @Input() tipo: number = 0;
  detalles: any[] = [];

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    if (this.tipo === 7) {
      (await this.asmsSrvc.getDetallePañal(this.codigo)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.detalles = resp;
          //console.log(resp);
        }
      });
    } else if (this.tipo === 8) {
      (await this.asmsSrvc.getDetalleGolpe(this.codigo)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.detalles = resp;
          //console.log(resp);
        }
      });
    } else if (this.tipo === 9) {
      (await this.asmsSrvc.getDetalleEnfermedad(this.codigo)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.detalles = resp;
          //console.log(resp);
        }
      });
    } else if (this.tipo === 10) {
      (await this.asmsSrvc.getDetalleConducta(this.codigo)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.detalles = resp;
          //console.log(resp);
        }
      });
    }
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
