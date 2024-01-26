import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { UserService } from 'src/app/services/user.service';
import { PagosHijosPage } from '../pagos-hijos/pagos-hijos.page';
import { TareasHijosPage } from '../tareas-hijos/tareas-hijos.page';
import { SoportePage } from '../../soporte/soporte.page';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  datosUsuario: any;
  nombre: string = '';
  foto: string = '';
  imagenes: any;
  logo: string = '';
  
  constructor(private storage: Storage, private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService, private navCtrl: NavController) {}

  @Input() titulo: string = '';
  mostrarHome: boolean = true

  async ngOnInit() {
    this.datosUsuario = await this.storage.get('datos');
    this.nombre = this.datosUsuario.nombre;
    this.foto = this.datosUsuario.url_foto;
    console.log(this.datosUsuario);
    (await this.asmsSrvc.getImagenes()).subscribe((imagenes: any) => {
      this.imagenes = imagenes;
      this.logo = imagenes.data.logo;
    });
  }

  async logOut(){
    this.navCtrl.navigateRoot('/login');
    this.storage.remove('datos');
    this.storage.remove('ordenes');
    this.storage.clear();
  }

  ocultarHome() {
    this.mostrarHome = false;
  }

  navegar(ruta: any) {
    this.navCtrl.navigateRoot(ruta);
  }

  verEncuestas(){
    
  }

  async verPagos(){
    const pagina = await this.modalCtrl.create({
      component: PagosHijosPage,
    });
    await pagina.present();
  }

  verVideoClases(){

  }

  async verActividades(){
    const pagina = await this.modalCtrl.create({
      component: TareasHijosPage,
    });
    await pagina.present();
  }

  verNotas(){

  }

  verReportes(){

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
