import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-cali-alumnos',
  templateUrl: './cali-alumnos.page.html',
  styleUrls: ['./cali-alumnos.page.scss'],
})
export class CaliAlumnosPage implements OnInit {

  @Input() gradoDesc: string = '';
  @Input() seccionDesc: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() nivel: string = '';

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  alumnos: any[] = [];

  async ngOnInit() {
    (await this.asmsSrvc.getAlumnos(this.grado, this.nivel, this.seccion)).subscribe((alumnos: any) => {
      if(alumnos != '') {
        this.alumnos = alumnos;
      }
    })
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
