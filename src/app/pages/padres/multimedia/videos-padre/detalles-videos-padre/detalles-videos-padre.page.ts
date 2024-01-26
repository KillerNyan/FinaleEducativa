import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-detalles-videos-padre',
  templateUrl: './detalles-videos-padre.page.html',
  styleUrls: ['./detalles-videos-padre.page.scss'],
})
export class DetallesVideosPadrePage implements OnInit {

  detalles: any[] = [];
  @Input() codigo: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetalleVideosPadre(this.codigo)).subscribe((detalles: any) => {
      if(Object.prototype.toString.call(detalles) === '[object Array]'){
        this.detalles = detalles;
      }
    })
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
