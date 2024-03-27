import { Component, Input, OnInit } from '@angular/core';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { ModalController } from '@ionic/angular';
import { MateriasPage } from '../materias/materias.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  secciones: any[] = [];
  @Input() imgAlumnos: string = '';
  datosUsuario: any;
  tipoUsuario: string = '';
  codigo: string = ''; 

  constructor( private asmsSrvc: AsmsServiceService, private modalCtrl: ModalController, private strg: Storage ) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.tipoUsuario = this.datosUsuario.tipo_usuario;
    this.codigo = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getSecciones(this.tipoUsuario, this.codigo)).subscribe(async (secciones: any) => {
      if(Object.prototype.toString.call(secciones) === '[object Array]'){
        this.secciones = secciones;
      }
    })
  }

  async verMaterias(pos: any) {
    const gradDesc = this.secciones[pos].grado_descripcion;
    const secDesc = this.secciones[pos].seccion_descripcion;
    const niv = this.secciones[pos].nivel;
    const grad = this.secciones[pos].grado;
    const sec = this.secciones[pos].seccion;
    const circular = await this.modalCtrl.create({
      component: MateriasPage,
      componentProps: {
        gradoDesc: gradDesc,
        nivel: niv,
        grado: grad,
        seccionDesc: secDesc,
        seccion: sec
      }
    })
    await circular.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
