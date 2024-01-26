import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-detalle-tarea-hijos',
  templateUrl: './detalle-tarea-hijos.page.html',
  styleUrls: ['./detalle-tarea-hijos.page.scss'],
})
export class DetalleTareaHijosPage implements OnInit {

  detalles: any[] = [];
  documentos: any[] = [];
  @Input() codigo: string = '';
  @Input() alumno: string = '';
  @Input() status: number = 1;
  @Input() situacion: string = '';
  @Input() respuesta: string = '';
  @Input() ponderacion: string = '';
  @Input() tipoCalificacion: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetalleTareaPadres(this.codigo, this.alumno, this.status)).subscribe((detalles: any) => {
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
