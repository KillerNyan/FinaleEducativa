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
  codigo: string = '';
  tipo: string = '';
  alumno: string = '';
  page: number = 0;
  contador: number = 0;
  imagenes: any;
  logo: string = '';
  
  constructor(private storage: Storage, private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService, private navCtrl: NavController) {}

  @Input() titulo: string = '';
  mostrarHome: boolean = true

  async ngOnInit() {
    this.datosUsuario = await this.storage.get('datos');
    this.nombre = this.datosUsuario.nombre;
    this.foto = this.datosUsuario.url_foto;
    this.codigo = this.datosUsuario.tipo_codigo;
    console.log(this.datosUsuario);
    (await this.asmsSrvc.getImagenes()).subscribe((imagenes: any) => {
      this.imagenes = imagenes;
      this.logo = imagenes.data.logo;
    });
    (await this.asmsSrvc.getNotificaciones(this.codigo, this.tipo, this.alumno, this.page)).subscribe((notificaciones: any) => {
      if (Object.prototype.toString.call(notificaciones) === '[object Array]') {
        for(let i = 0; i < notificaciones.length; i++) {
          if(notificaciones[i].clase === 'noleida'){
            this.contador = this.contador + 1;
          }
        }
        console.log(notificaciones);
      }
    });
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
    const codigo = this.codigo;
    const pagina = await this.modalCtrl.create({
      component: ActividadesHijosPage,
      componentProps: {
        codigo
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
