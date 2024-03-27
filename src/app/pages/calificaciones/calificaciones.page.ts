import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { CaliAlumnosPage } from '../cali-alumnos/cali-alumnos.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {

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
    (await this.asmsSrvc.getSecciones(this.tipoUsuario, this.codigo)).subscribe((secciones: any) => {
      this.secciones = secciones;
    });
  }

  async verAlumnos( pos: any ) {
    const graDesc = this.secciones[pos].grado_descripcion;
    const secDesc = this.secciones[pos].seccion_descripcion;
    const gra = this.secciones[pos].grado;
    const sec = this.secciones[pos].seccion;
    const niv = this.secciones[pos].nivel;
    const alumnos = await this.modalCtrl.create({
      component: CaliAlumnosPage,
      componentProps: {
        gradoDesc: graDesc,
        seccionDesc: secDesc,
        grado: gra,
        seccion: sec,
        nivel: niv
      }
    })
    await alumnos.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
