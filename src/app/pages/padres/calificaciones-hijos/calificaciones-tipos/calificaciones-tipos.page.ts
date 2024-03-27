import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalificacionesListasPage } from './calificaciones-listas/calificaciones-listas.page';

@Component({
  selector: 'app-calificaciones-tipos',
  templateUrl: './calificaciones-tipos.page.html',
  styleUrls: ['./calificaciones-tipos.page.scss'],
})
export class CalificacionesTiposPage implements OnInit {

  @Input() codigoHijo: string = '';
  @Input() imgHijo: string = '';
  @Input() nombreHijo: string = '';
  @Input() apellidoHijo: string = '';
  @Input() nivel: string = '';
  @Input() grado: string = '';

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async verCalificaciones(tipo: number) {
    const pagina = await this.modalCtrl.create({
      component: CalificacionesListasPage,
      componentProps: {
        codigoHijo: this.codigoHijo,
        imgHijo: this.imgHijo,
        nombreHijo: this.nombreHijo,
        apellidoHijo: this.apellidoHijo,
        nivel: this.nivel,
        grado: this.grado,
        tipo,
      }
    });
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
