import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { AlumnosPage } from '../alumnos/alumnos.page';
import { Storage } from '@ionic/storage-angular';
import { TareasPage } from '../tareas/tareas.page';
import { PostSecPage } from '../post-sec/post-sec.page';
import { CalificacionesPage } from '../calificaciones/calificaciones.page';
import { CircularesPage } from '../circulares/circulares.page';
import { PhotosPage } from '../photos/photos.page';
import { ReportesPage } from '../reportes/reportes.page';
import { SoportePage } from '../soporte/soporte.page';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.page.html',
  styleUrls: ['./grados.page.scss'],
})
export class GradosPage implements OnInit {

  datosUsuario: any;
  nombre: string = '';
  foto: string = '';
  secciones: any[] = [];
  imagenes: any[] = [];
  logo: string = '';
  imgAlumnos: string = '';

  constructor(private asmsSrvc: AsmsServiceService, private modalCtrl: ModalController, private storage: Storage, private navCtrl: NavController) { }

  async ngOnInit() {
    this.datosUsuario = await this.storage.get('datos');
    this.nombre = this.datosUsuario.nombre;
    this.foto = this.datosUsuario.url_foto;
    (await this.asmsSrvc.getSecciones()).subscribe((secciones: any) => {
      if(Object.prototype.toString.call(secciones) === '[object Array]'){
        console.log(secciones);
        this.secciones = secciones;
      }
    });
    (await this.asmsSrvc.getImagenes()).subscribe((imagenes: any) => {
      this.imagenes = imagenes;
      this.logo = imagenes.data.logo;
      this.imgAlumnos = imagenes.data.alumnos;
    });
  }

  async verAlumnos(pos: any) {
    const graDesc = this.secciones[pos].grado_descripcion;
    const secDesc = this.secciones[pos].seccion_descripcion;
    const gra = this.secciones[pos].grado;
    const sec = this.secciones[pos].seccion;
    const niv = this.secciones[pos].nivel;
    const alumnos = await this.modalCtrl.create({
      component: AlumnosPage,
      componentProps: {
        gradoDesc: graDesc,
        seccionDesc: secDesc,
        grado: gra,
        seccion: sec,
        nivel: niv
      }
    });
    await alumnos.present();
  }

  componentes: any[] = [];

  async logOut() {
    this.navCtrl.navigateRoot('/login');
    this.storage.remove('datos');
    this.storage.remove('ordenes');
    this.storage.clear();
  }

  async verTareas() {
    const imgAlumnos = this.imgAlumnos;
    const pagina = await this.modalCtrl.create({
      component: TareasPage,
      componentProps: {
        imgAlumnos,
      }
    })
    await pagina.present();
  }

  async verPostit() {
    const imgAlumnos = this.imgAlumnos;
    const pagina = await this.modalCtrl.create({
      component: PostSecPage,
      componentProps: {
        imgAlumnos,
      }
    })
    await pagina.present();
  }

  async verCalificaciones() {
    const imgAlumnos = this.imgAlumnos;
    const pagina = await this.modalCtrl.create({
      component: CalificacionesPage,
      componentProps: {
        imgAlumnos,
      }
    })
    await pagina.present();
  }

  async verCirculares() {
    const pagina = await this.modalCtrl.create({
      component: CircularesPage,
    })
    await pagina.present();
  }

  async verPhotoAlbum() {
    const pagina = await this.modalCtrl.create({
      component: PhotosPage,
    })
    await pagina.present();
  }

  async verReportes() {
    const pagina = await this.modalCtrl.create({
      component: ReportesPage,
    })
    await pagina.present();
  }

  async verSoporte() {
    const name = this.datosUsuario.nombre;
    const logo = this.logo;
    const pagina = await this.modalCtrl.create({
      component: SoportePage,
      componentProps: {
        name,
        logo
      }
    })
    await pagina.present();
  }

}
