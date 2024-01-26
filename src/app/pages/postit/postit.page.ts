import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallePostitPage } from '../detalle-postit/detalle-postit.page';
import { NuevoPostitPage } from '../nuevo-postit/nuevo-postit.page';
import { PostitPorAlumnoPage } from '../postit-por-alumno/postit-por-alumno.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.page.html',
  styleUrls: ['./postit.page.scss'],
})
export class PostitPage implements OnInit {

  datosUsuario: any;
  codigoMaestro: string = '';
  page: number = 0;
  @Input() gradoDesc: string = '';
  @Input() seccionDesc: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() nivel: string = '';
  scroll: boolean = false;

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService, private strg: Storage) { }

  postits: any[] = [];
  alumnos: any[] = [];
  showPostits: boolean = true;
  showAlumnos: boolean = false;

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigoMaestro = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getPostit(this.codigoMaestro, this.grado, this.nivel, this.seccion, this.page)).subscribe((postits: any) => {
      if (Object.prototype.toString.call(postits) === '[object Array]') {
        this.postits = postits;
      }
    });
    (await this.asmsSrvc.getAlumnos(this.grado, this.nivel, this.seccion)).subscribe((alumnos: any) => {
      if(Object.prototype.toString.call(alumnos) === '[object Array]'){
        this.alumnos = alumnos;
      }
    })
  }

  async segmentChanged(evento: any) {
    if (evento.detail.value == "todos") {
      this.showPostits = true;
      this.showAlumnos = false;
    }
    if (evento.detail.value == "alumnos") {
      this.showPostits = false;
      this.showAlumnos = true;
    }
  }

  async add() {
    const grad = this.grado;
    const secc = this.seccion;
    const niv = this.nivel;
    const nuevo = await this.modalCtrl.create({
      component: NuevoPostitPage,
      componentProps: {
        grado: grad,
        seccion: secc,
        nivel: niv,
      }
    })
    await nuevo.present();

    const { data, role } = await nuevo.onWillDismiss();
    console.log(role);
    if (role === 'confirm') {
      this.page = 0;
      (await this.asmsSrvc.getPostit(this.codigoMaestro, this.grado, this.nivel, this.seccion, this.page)).subscribe((postits: any) => {
        if (Object.prototype.toString.call(postits) === '[object Array]') {
          this.postits = postits;
        }
      });
    }
  }

  async detallePostit(pos1: any, pos2: any) {
    const codigo = this.postits[pos1].date_postit[pos2].codigo;
    const titulo = this.postits[pos1].date_postit[pos2].titulo;
    const descripcion = this.postits[pos1].date_postit[pos2].descripcion;
    const fecha = this.postits[pos1].date_postit[pos2].fecha;
    const alumno = this.postits[pos1].date_postit[pos2].alumno_name;
    const imagenes = this.postits[pos1].date_postit[pos2].imagenes;
    const archivos = this.postits[pos1].date_postit[pos2].archivos;
    const maestro = this.postits[pos1].date_postit[pos2].post_maestro;
    const nivel = this.nivel;
    const grado = this.grado;
    const seccion = this.seccion;
    const detalle = await this.modalCtrl.create({
      component: DetallePostitPage,
      componentProps: {
        codigo,
        titulo,
        descripcion,
        fecha,
        alumno,
        imagenes,
        archivos,
        maestro,
        nivel,
        grado,
        seccion
      }
    })
    await detalle.present();

    const { data, role } = await detalle.onWillDismiss();
    console.log(role);
    if (role === 'confirm') {
      this.page = 0;
      (await this.asmsSrvc.getPostit(this.codigoMaestro, this.grado, this.nivel, this.seccion, this.page)).subscribe((postits: any) => {
        if (Object.prototype.toString.call(postits) === '[object Array]') {
          this.postits = postits;
          console.log(postits);
        }
      });
    }
  }

  async postitPorAlumno(pos: any) {
    const niv = this.nivel;
    const grad = this.grado;
    const secc = this.seccion;
    const nom = this.alumnos[pos].nombre;
    const codAlu = this.alumnos[pos].cui;
    const pagina = await this.modalCtrl.create({
      component: PostitPorAlumnoPage,
      componentProps: {
        nivel: niv,
        grado: grad,
        seccion: secc,
        codigoAlumno: codAlu,
        nombre: nom
      }
    })
    await pagina.present();
  }

  async onIonInfinite(ev: any) {
    this.page = this.page + 1;
    (await this.asmsSrvc.getPostit(this.codigoMaestro, this.grado, this.nivel, this.seccion, this.page)).subscribe((postits: any) => {
      if (Object.prototype.toString.call(postits) === '[object Array]') {
        this.postits.push(...postits);
      } else {
        this.scroll = true;
      }
      (ev).target.complete();
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
