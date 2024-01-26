import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private strg: Storage, private navCtrl: NavController ) { }

  ngOnInit() {
    this.strg.create();
    setTimeout(async () => {
      const datosUsuario = await this.strg.get('datos');
      if ( datosUsuario ){
        if (datosUsuario.tipo_usuario == '1' || datosUsuario.tipo_usuario == '2') {
          this.navCtrl.navigateRoot('/grados');
        } else if (datosUsuario.tipo_usuario == '3') {
          this.navCtrl.navigateRoot('/tab');
        } else if (datosUsuario.tipo_usuario == '10') {
          this.navCtrl.navigateRoot('/tab-hijos');
        }
      } else {
          this.navCtrl.navigateRoot('/login');
        }
    }, 3000);
  }

}
