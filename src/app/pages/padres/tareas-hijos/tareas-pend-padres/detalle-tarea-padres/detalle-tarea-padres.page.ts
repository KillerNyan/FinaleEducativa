import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-detalle-tarea-padres',
  templateUrl: './detalle-tarea-padres.page.html',
  styleUrls: ['./detalle-tarea-padres.page.scss'],
})
export class DetalleTareaPadresPage implements OnInit {

  detalles: any[] = [];
  documentos: any[] = [];
  @Input() codigo: string = '';
  @Input() hijo: string = '';
  @Input() status: number = 1;
  @Input() situacion: string = '';
  @Input() respuesta: string = '';
  @Input() ponderacion: string = '';
  @Input() tipoCalificacion: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetalleTareaPadres(this.codigo, this.hijo, this.status)).subscribe((detalles: any) => {
      if(Object.prototype.toString.call(detalles) === '[object Array]'){
        this.detalles = detalles;
      }
    });
    (await this.asmsSrvc.getDocsTareaPadres(this.codigo)).subscribe((documentos: any) => {
      if(Object.prototype.toString.call(documentos) === '[object Array]'){
        this.documentos = documentos;
      }
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
