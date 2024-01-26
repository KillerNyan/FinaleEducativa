import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-detalles-tareas',
  templateUrl: './detalles-tareas.page.html',
  styleUrls: ['./detalles-tareas.page.scss'],
})
export class DetallesTareasPage implements OnInit {

  detalles: any[] = [];
  @Input() codigo: string = '';
  link: boolean = true;

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetallesTareas(this.codigo)).subscribe((detalles: any) => {
      if(Object.prototype.toString.call(detalles) === '[object Array]'){
        this.detalles = detalles;
        if (detalles[0].link === ''){
          this.link = false;
        }
      }
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
