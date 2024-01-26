import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetalleTareaPadresPage } from './detalle-tarea-padres/detalle-tarea-padres.page';

@Component({
  selector: 'app-tareas-pend-padres',
  templateUrl: './tareas-pend-padres.page.html',
  styleUrls: ['./tareas-pend-padres.page.scss'],
})
export class TareasPendPadresPage implements OnInit {
  
  @Input() codigoHijo: string = '';
  tareas: any[] = [];
  color: string = '';
  filtrarTarea: boolean = false;
  filtroSituacion: string = '';

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    (await this.asmsSrvc.getTareasPadres(this.codigoHijo)).subscribe((tareas:any) => {
      if(Object.prototype.toString.call(tareas) === '[object Array]'){
        this.tareas = tareas;
      }
    })
  }

  async filtro(sit: string){
    if (sit == '') {
      this.filtrarTarea = false;
    } else {
      this.filtrarTarea = true;
      this.filtroSituacion = sit;
    }
  }

  async verTarea(pos: any) {
    const codigo = this.tareas[pos].codigo;
    const hijo = this.codigoHijo;
    let status = 1;
    const situacion = this.tareas[pos].situacion;
    const respuesta = this.tareas[pos].tipo_respuesta;
    const ponderacion = this.tareas[pos].ponderacion;
    const tipoCalificacion = this.tareas[pos].tipo_calificacion;
    if ( situacion == "Calificada" ) {
      status = 2;
    } else {
      status = 1;
    };
    const pagina = await this.modalCtrl.create({
      component: DetalleTareaPadresPage,
      componentProps: {
        codigo,
        hijo,
        status,
        situacion,
        respuesta,
        ponderacion,
        tipoCalificacion,
      }
    });
    await pagina.present();
  }

  situacion(situacion: any) {
    if (situacion == 'Pendiente de Calificar'){
      this.color = 'warning';
    } else if (situacion == ' respuesta enviada'){
      this.color = 'success';
    } else if (situacion == 'Calificada'){
      this.color = 'primary';
    }
    return true;
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
