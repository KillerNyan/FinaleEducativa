import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetalleTareaHijosPage } from './detalle-tarea-hijos/detalle-tarea-hijos.page';

@Component({
  selector: 'app-actividades-hijos',
  templateUrl: './actividades-hijos.page.html',
  styleUrls: ['./actividades-hijos.page.scss'],
})
export class ActividadesHijosPage implements OnInit {

  @Input() codigo: string = '';
  tareas: any[] = [];
  color: string = '';
  filtrarTarea: boolean = false;
  filtroSituacion: string = '';

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getTareasAlumnos(this.codigo)).subscribe((tareas:any) => {
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
    const alumno = this.codigo;
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
      component: DetalleTareaHijosPage,
      componentProps: {
        codigo,
        alumno,
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
