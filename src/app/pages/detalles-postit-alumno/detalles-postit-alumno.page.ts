import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { VerImagenesPage } from '../ver-imagenes/ver-imagenes.page';

@Component({
  selector: 'app-detalles-postit-alumno',
  templateUrl: './detalles-postit-alumno.page.html',
  styleUrls: ['./detalles-postit-alumno.page.scss'],
})
export class DetallesPostitAlumnoPage implements OnInit {

  datosUsuario: any;
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() fecha: string = '';
  @Input() maestro: string = '';

  constructor( private modalCtrl: ModalController, private strg: Storage) { }

  disabled: boolean = true;

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    if (this.datosUsuario.tipo_codigo == this.maestro){
      this.disabled = false;
    }
  }

  async verImg(img: any) {
    const verImagen = await this.modalCtrl.create({
      component: VerImagenesPage,
      componentProps: {
        img
      },
      cssClass: 'transparent-modal'
    });
    await verImagen.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
