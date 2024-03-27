import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { ReportesAlumnosPage } from './reportes-alumnos/reportes-alumnos.page';

@Component({
  selector: 'app-reportes-secciones',
  templateUrl: './reportes-secciones.page.html',
  styleUrls: ['./reportes-secciones.page.scss'],
})
export class ReportesSeccionesPage implements OnInit {

  datosUsuario: any;
  tipoUsuario: string = '';
  codigo: string = '';
  secciones: any[] = [];
  imgAlumnos: string = '';
  

  constructor(private asmsSrvc: AsmsServiceService, private modalCtrl: ModalController, private storage: Storage) { }

  async ngOnInit() {
    this.datosUsuario = await this.storage.get('datos');
    this.tipoUsuario = this.datosUsuario.tipo_usuario;
    this.codigo = this.datosUsuario.tipo_codigo;
    //console.log(this.datosUsuario);
    (await this.asmsSrvc.getSecciones(this.tipoUsuario, this.codigo)).subscribe((secciones: any) => {
      if(Object.prototype.toString.call(secciones) === '[object Array]'){
        //console.log(secciones);
        this.secciones = secciones;
      }
    });
    (await this.asmsSrvc.getImagenes()).subscribe((imagenes: any) => {
      this.imgAlumnos = imagenes.data.alumnos;
    });
  }

  async verAlumnos(pos: any){
    const nivel = this.secciones[pos].nivel;
    const grado = this.secciones[pos].grado;
    const seccion = this.secciones[pos].seccion;
    const gradoDescripcion = this.secciones[pos].grado_descripcion;
    const seccionDescripcion = this.secciones[pos].seccion_descripcion;
    const pagina = await this.modalCtrl.create({
      component: ReportesAlumnosPage,
      componentProps: {
        nivel,
        grado,
        seccion,
        gradoDescripcion,
        seccionDescripcion,
      }
    });
    await pagina.present();
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

}
