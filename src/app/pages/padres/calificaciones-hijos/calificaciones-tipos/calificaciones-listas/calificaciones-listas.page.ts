import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-calificaciones-listas',
  templateUrl: './calificaciones-listas.page.html',
  styleUrls: ['./calificaciones-listas.page.scss'],
})
export class CalificacionesListasPage implements OnInit {

  @Input() codigoHijo: string = '';
  @Input() imgHijo: string = '';
  @Input() nombreHijo: string = '';
  @Input() apellidoHijo: string = '';
  @Input() nivel: string = '';
  @Input() grado: string = '';
  //Tipo 0 para Calificaciones por Unidad
  //Tipo 1 para Calificaciones por Materia
  @Input() tipo: number = 0;
  unidades: any[] = [];
  materias: any[] = [];
  abierto: boolean = false;
  loading: boolean = true;

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    if (this.tipo == 0) {
      (await this.asmsSrvc.getUnidades(this.nivel, this.grado)).subscribe((resp: any) => {
        this.unidades = resp;
        //console.log(resp);
      });
    } else if (this.tipo == 1) {
      (await this.asmsSrvc.getMateriasNotas(this.nivel, this.grado)).subscribe((resp: any) => {
        this.materias = resp;
        //console.log(resp);
      });
    }
  }

  async verUnidad(pos: any) {
    if (this.abierto == false) {
      let unidad = pos;
      (await this.asmsSrvc.getUnidadesMaterias(this.nivel, this.grado, unidad, this.codigoHijo)).subscribe((resp: any) => {
        this.materias = resp;
        this.loading = false;
        //console.log(resp);
      });
      this.abierto = true;
    } else {
      this.abierto = false;
    }
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
