import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallesPostitAlumnoPage } from '../detalles-postit-alumno/detalles-postit-alumno.page';

@Component({
  selector: 'app-postit-por-alumno',
  templateUrl: './postit-por-alumno.page.html',
  styleUrls: ['./postit-por-alumno.page.scss'],
})
export class PostitPorAlumnoPage implements OnInit {

  datosUsuario: any;
  tipoUsuario: string = '';
  codigoMaestro: string = '';
  postits: any[] = [];
  @Input() nivel: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() nombre: string = '';
  @Input() codigoAlumno: string = '';

  constructor( private modalCtrl: ModalController, private strg: Storage, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.tipoUsuario = this.datosUsuario.tipo_usuario;
    this.codigoMaestro = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getPostitPorAlumno(this.grado, this.nivel, this.seccion, this.codigoAlumno, this.tipoUsuario, this.codigoMaestro)).subscribe((postits: any) => {
      if(Object.prototype.toString.call(postits) === '[object Array]'){
        this.postits = postits;
      }
    })
  }

  async detallePostit( pos: any ){
    const tit = this.postits[pos].titulo;
    const desc = this.postits[pos].descripcion;
    const fec = this.postits[pos].fecha;
    const maes = this.postits[pos].maestro;
    const pagina = await this.modalCtrl.create({
      component: DetallesPostitAlumnoPage,
      componentProps: {
        titulo: tit,
        descripcion: desc,
        fecha: fec,
        maestro: maes,
      }
    })
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
