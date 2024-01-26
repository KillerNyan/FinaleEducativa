import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-detalle-pagos',
  templateUrl: './detalle-pagos.page.html',
  styleUrls: ['./detalle-pagos.page.scss'],
})
export class DetallePagosPage implements OnInit {

  pagosProgs: any[] = [];
  pagosRlzds: any[] = [];
  pagosSaldos: any[] = [];
  diferencia: string = '';
  texto: string = '';
  saldo: string = '';
  fecha: string = '';
  @Input() codigoHijo: number = 0;
  @Input() imgHijo: string = '';
  @Input() nombreHijo: string = '';
  @Input() apellidoHijo: string = '';

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    (await this.asmsSrvc.getPagosProgramados(this.codigoHijo)).subscribe((pagosProgs: any) => {
      if (Object.prototype.toString.call(pagosProgs) === '[object Array]') {
        this.pagosProgs = pagosProgs;
      }
    });
    (await this.asmsSrvc.getPagosRealizados(this.codigoHijo)).subscribe((pagosRlzds: any) => {
      if (Object.prototype.toString.call(pagosRlzds) === '[object Array]') {
        this.pagosRlzds = pagosRlzds;
      }
    });
    (await this.asmsSrvc.getPagosSaldos(this.codigoHijo)).subscribe((pagosSaldos: any) => {
      this.diferencia = pagosSaldos.diferencia;
      this.texto = pagosSaldos.texto;
      this.saldo = pagosSaldos.saldo;
      this.fecha = pagosSaldos.fecha_ultimo_pago;
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
