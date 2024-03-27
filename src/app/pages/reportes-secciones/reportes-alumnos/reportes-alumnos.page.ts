import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { TipoReportesPage } from './tipo-reportes/tipo-reportes.page';

@Component({
  selector: 'app-reportes-alumnos',
  templateUrl: './reportes-alumnos.page.html',
  styleUrls: ['./reportes-alumnos.page.scss'],
})
export class ReportesAlumnosPage implements OnInit {

  @Input() gradoDescripcion: string = '';
  @Input() seccionDescripcion: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() nivel: string = '';

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  alumnos: any[] = [];

  async ngOnInit() {
    (await this.asmsSrvc.getAlumnos(this.grado, this.nivel, this.seccion)).subscribe((alumnos: any) => {
      if(Object.prototype.toString.call(alumnos) === '[object Array]') {
        this.alumnos = alumnos;
        console.log(alumnos);
      }
    })
  }

  async verTiposReportes(pos: any) {
    const alumno = this.alumnos[pos].cui;
    const nombre = this.alumnos[pos].nombre;
    const foto = this.alumnos[pos].url_foto;
    const pagina = await this.modalCtrl.create({
      component: TipoReportesPage,
      componentProps: {
        nivel: this.nivel,
        grado: this.grado,
        seccion: this.seccion,
        alumno,
        nombre,
        foto,
      }
    });
    await pagina.present();
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

}
