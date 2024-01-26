import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { TareasPendPage } from '../tareas-pend/tareas-pend.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {

  datosUsuario: any;
  tipoUsu: string = '';
  codigoUsu: string = '';
  @Input() gradoDesc: string = '';
  @Input() nivel: string = '';
  @Input() grado: string = '';
  @Input() seccionDesc: string = '';
  @Input() seccion: string = '';

  constructor( private modalCtrl: ModalController, private strg: Storage, private asmsSrvc: AsmsServiceService ) { }

  materias: any[] = [];

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.tipoUsu = this.datosUsuario.tipo_usuario;
    this.codigoUsu = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getMaterias(this.tipoUsu, this.codigoUsu, this.nivel, this.grado)).subscribe((materias: any) => {
      if(Object.prototype.toString.call(materias) === '[object Array]'){
        this.materias = materias;
      }
    })
  }

  async verTareas(pos: any) {
    const nivel = this.nivel;
    const grado = this.grado;
    const seccion = this.seccion;
    const codigoMateria = this.materias[pos].mat_codigo;
    const circular = await this.modalCtrl.create({
      component: TareasPendPage,
      componentProps: {
        nivel,
        grado,
        seccion,
        codigoMateria,
      }
    })
    await circular.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
