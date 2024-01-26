import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-detalles-alumno',
  templateUrl: './detalles-alumno.page.html',
  styleUrls: ['./detalles-alumno.page.scss'],
})
export class DetallesAlumnoPage implements OnInit {

  detalles: any[] = [];
  @Input() foto: string = '';
  @Input() nombre: string = '';
  @Input() cui: string = '';
  @Input() seccion: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetallesAlumno(this.cui)).subscribe( (detalles: any) => {
      if(Object.prototype.toString.call(detalles) === '[object Array]'){
        this.detalles = detalles;
      }
    })
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
