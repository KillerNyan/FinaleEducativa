import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-alumnos-postit',
  templateUrl: './alumnos-postit.page.html',
  styleUrls: ['./alumnos-postit.page.scss'],
})
export class AlumnosPostitPage implements OnInit {

  alumnos: any[] = [];
  distintivo: any[] = [];
  textoBuscar: string = '';
  conteo: number = 0;
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() nivel: string = '';
  @Input() seleccionados: any[] = [];

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    (await this.asmsSrvc.getAlumnos(this.grado, this.nivel, this.seccion)).subscribe((alumnos: any) => {
      if(Object.prototype.toString.call(alumnos) === '[object Array]'){
        this.alumnos = alumnos;
        for (let i = 0; i < this.alumnos.length; i++){
          this.distintivo.push(false);
        }
        if (this.seleccionados.length != 0){
          for (let i = 0; i < this.alumnos.length; i++){
            let find = this.seleccionados.filter(cui => cui == this.alumnos[i].cui)
            if (find.length != 0){
              this.distintivo[i] = true;
            }
          }
        }
      }
    });
  }

  buscar(event: any) {
    this.textoBuscar = event.detail.value;
  }

  seleccionarAlumno(event: any, pos: any){
    if (event.detail.checked == true){
      this.seleccionados.push(this.alumnos[pos].cui);
    } else {
      this.seleccionados = this.seleccionados.filter(cui => cui != this.alumnos[pos].cui);
    }
    this.conteo = this.seleccionados.length;
  }

  seleccionarTodos(){
    this.seleccionados = [];
    for (let i = 0; i < this.alumnos.length; i++){
      this.distintivo[i] = true;
      this.seleccionados.push(this.alumnos[i].cui);
    }
    this.conteo = this.seleccionados.length;
  }

  confirmar(){
    this.modalCtrl.dismiss({
      seleccionados: this.seleccionados,
      reemplazar: true
    })
  }

  cerrar(){
    this.modalCtrl.dismiss({
      seleccionados: [],
      reeemplazar: false
    });
  }

}
