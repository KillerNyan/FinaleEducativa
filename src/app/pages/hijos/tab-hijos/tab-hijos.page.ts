import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { SoportePage } from '../../soporte/soporte.page';
import { ActividadesHijosPage } from '../actividades-hijos/actividades-hijos.page';

@Component({
  selector: 'app-tab-hijos',
  templateUrl: './tab-hijos.page.html',
  styleUrls: ['./tab-hijos.page.scss'],
})
export class TabHijosPage implements OnInit {

  datosUsuario: any;
  nombre: string = '';
  foto: string = '';
  codigoAlumno: string = '';
  imagenes: any;
  logo: string = '';
  
  constructor(private storage: Storage, private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService, private navCtrl: NavController) {}

  @Input() titulo: string = '';
  mostrarHome: boolean = true

  async ngOnInit() {
    this.datosUsuario = await this.storage.get('datos');
    this.nombre = this.datosUsuario.nombre;
    this.foto = this.datosUsuario.url_foto;
    this.codigoAlumno = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getImagenes()).subscribe((imagenes: any) => {
      this.imagenes = imagenes;
      this.logo = imagenes.data.logo;
    })
  }

  async logOut(){
    this.navCtrl.navigateRoot('/login');
    this.storage.remove('datos');
    this.storage.remove('ordenes');
    this.storage.clear();
  }

  ocultarHome() {
    this.mostrarHome = false
  }

  navegar(ruta: any) {
    this.navCtrl.navigateRoot(ruta);
  }

  verCalendario(){
    
  }

  verVideoClases(){
  }

  async verActividades(){
    const codigoAlumno = this.codigoAlumno;
    const pagina = await this.modalCtrl.create({
      component: ActividadesHijosPage,
      componentProps: {
        codigoAlumno
      }
    });
    await pagina.present();
  }

  verNotas(){
  }

  verEvaluaciones(){

  }

  verNotificaciones(){

  }
  
  async verSoporte(){
    const name = this.datosUsuario.nombre;
    const logo = this.logo
    const pagina = await this.modalCtrl.create({
      component: SoportePage,
      componentProps: {
        name,
        logo
      }
    });
    await pagina.present();
  }

}
