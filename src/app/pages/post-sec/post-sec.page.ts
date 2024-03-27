import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { PostitPage } from '../postit/postit.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-post-sec',
  templateUrl: './post-sec.page.html',
  styleUrls: ['./post-sec.page.scss'],
})
export class PostSecPage implements OnInit {

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
    (await this.asmsSrvc.getSecciones(this.tipoUsuario, this.codigo)).subscribe( (secciones: any) => {
      if(Object.prototype.toString.call(secciones) === '[object Array]'){
        this.secciones = secciones;
      }
    })
  }

  async verAlumnos( pos: any ) {
    const graDesc = this.secciones[pos].grado_descripcion;
    const secDesc = this.secciones[pos].seccion_descripcion;
    const gra = this.secciones[pos].grado;
    const sec = this.secciones[pos].seccion;
    const niv = this.secciones[pos].nivel;
    const alumnos = await this.modalCtrl.create({
      component: PostitPage,
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
