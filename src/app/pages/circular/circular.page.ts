import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.page.html',
  styleUrls: ['./circular.page.scss'],
})
export class CircularPage implements OnInit {

  datosUsuario: any;
  circular: any[] = [];
  @Input() codigo: string = '';

  constructor( private modalCtrl: ModalController, private strg: Storage, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    (await this.asmsSrvc.getCircular(this.codigo)).subscribe((circular: any) => {
      if(Object.prototype.toString.call(circular) === '[object Array]'){
        this.circular = circular;
      }
    })
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
