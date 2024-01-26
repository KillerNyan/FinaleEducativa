import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallesTareasPage } from '../detalles-tareas/detalles-tareas.page';

@Component({
  selector: 'app-tareas-pend',
  templateUrl: './tareas-pend.page.html',
  styleUrls: ['./tareas-pend.page.scss'],
})
export class TareasPendPage implements OnInit {

  @Input() nivel: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() codigoMateria: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }
  
  tareas: any[] = [];

  async ngOnInit() {
    (await this.asmsSrvc.getTareas(this.nivel, this.grado, this.seccion, this.codigoMateria)).subscribe((tareas: any) => {
      if(Object.prototype.toString.call(tareas) === '[object Array]'){
        this.tareas = tareas;
      }
    })
  }

  async verDetalleTarea(pos: any) {
    const codigo = this.tareas[pos].codigo;
    const pagina = await this.modalCtrl.create({
      component: DetallesTareasPage,
      componentProps: {
        codigo,
      }
    })
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
