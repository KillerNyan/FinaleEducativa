import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  componentes: any[] = [];
  
  constructor( private storage: Storage, private userSrvc: UserService, private navCtrl: NavController ) {}

  @Input() titulo: string = '';

  async ngOnInit() {
  }

  async logOut(){
    /* this.navCtrl.navigateRoot('/login');
    this.storage.remove('datos');
    this.storage.remove('ordenes');
    this.storage.clear(); */
  }

  navegar(ruta: any) {
    this.navCtrl.navigateRoot(ruta);
  }

}
