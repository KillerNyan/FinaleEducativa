import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ListaReportesMDPage } from './lista-reportes-md/lista-reportes-md.page';

@Component({
  selector: 'app-tipo-reportes',
  templateUrl: './tipo-reportes.page.html',
  styleUrls: ['./tipo-reportes.page.scss'],
})
export class TipoReportesPage implements OnInit {

  @Input() nivel: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() alumno: string = '';
  @Input() nombre: string = '';
  @Input() foto: string = '';

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async verListaReportes(tipo: any) {
    const pagina = await this.modalCtrl.create({
      component: ListaReportesMDPage,
      componentProps: {
        nivel: this.nivel,
        grado: this.grado,
        seccion: this.seccion,
        alumno: this.alumno,
        nombre: this.nombre,
        foto: this.foto,
        tipo,
      }
    });
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
