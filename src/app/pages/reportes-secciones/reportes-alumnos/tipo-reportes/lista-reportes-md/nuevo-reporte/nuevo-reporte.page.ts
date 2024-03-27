import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-nuevo-reporte',
  templateUrl: './nuevo-reporte.page.html',
  styleUrls: ['./nuevo-reporte.page.scss'],
})
export class NuevoReportePage implements OnInit {

  codigoMaestro: string = '';
  @Input() nuevo: boolean = false;
  @Input() modificar: boolean = false;
  @Input() codigo: string = '';
  @Input() nivel: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() tipo: string = '';
  @Input() nombre: string = '';
  @Input() foto: string = '';
  @Input() alumno: string = '';
  //Para Reporte de Pañal
  @Input() pipi: string = '';
  @Input() popo: string = '';
  @Input() consistencia: string = '';
  @Input() observaciones: string = '';
  //Para Reporte de Golpe
  @Input() lugar: string = '';
  @Input() hora: string = '';
  @Input() descripcion: string = '';
  @Input() medida: string = '';
  @Input() dosis: string = '';
  //Para Reporte de Enfermedad
  @Input() sintomas: string = '';
  @Input() aviso: string = '';
  //Para Reporte de Conducta
  @Input() comportamiento: string = '';

  constructor( private modalCtrl: ModalController, private toastCtrl: ToastController, private loadingCtrl: LoadingController, private asmsSrvc: AsmsServiceService, private strg: Storage ) { }

  async ngOnInit() {
    //console.log(this.nivel, this.grado, this.seccion, this.alumno);
    let datosUsuario = await this.strg.get('datos');
    this.codigoMaestro = datosUsuario.codigo;
  }

  calificaciones(value: string) {
    //console.log(value);
    this.comportamiento = value;
  }

  getData() {
    let data = {};
    if (this.tipo === '7') {
      data = {
        nivel: this.nivel, 
        grado: this.grado,
        seccion: this.seccion,
        usuario: this.codigoMaestro,
        codigo: this.codigo,
        alumno: this.alumno,
        pipi: this.pipi,
        popo: this.popo,
        consistencia: this.consistencia,
        obs: this.observaciones
      }
    } else if (this.tipo === '8') {
      data = {
        nivel: this.nivel, 
        grado: this.grado,
        seccion: this.seccion,
        usuario: this.codigoMaestro,
        codigo: this.codigo,
        alumno: this.alumno,
        lugar: this.lugar,
        hora: this.hora,
        descripcion: this.descripcion,
        medida: this.medida,
        dosis: this.dosis
      }
    } else if (this.tipo === '9') {
      data = {
        nivel: this.nivel, 
        grado: this.grado,
        seccion: this.seccion,
        usuario: this.codigoMaestro,
        codigo: this.codigo,
        alumno: this.alumno,
        sintomas: this.sintomas,
        hora: this.hora,
        aviso: this.aviso,
        medida: this.medida,
        dosis: this.dosis
      }
    } else if (this.tipo === '10') {
      data = {
        nivel: this.nivel, 
        grado: this.grado,
        seccion: this.seccion,
        usuario: this.codigoMaestro,
        codigo: this.codigo,
        alumno: this.alumno,
        calificacion: this.comportamiento,
        obs: this.observaciones
      }
    }
    return data;
  }

  async crearReporte() {
    let data = this.getData();
    
    if (this.tipo === '7') {
      (await this.asmsSrvc.nuevoPanial([data])).subscribe(async (resp: any) => {
        if (resp.status == 'success') {
          this.presentLoading('Creando Reporte');
          this.presentToast('Reporte creado satisfactoriamente', 'light');
          this.modalCtrl.dismiss( null, 'confirm' );
        } else {
          this.presentToast('No se pudo crear el Reporte', 'light');
        }
      });
    } else if (this.tipo === '8') {
      (await this.asmsSrvc.nuevoGolpe([data])).subscribe(async (resp: any) => {
        //console.log(resp);
        if (resp.status == 'success') {
          this.presentLoading('Creando Reporte');
          this.presentToast('Reporte creado satisfactoriamente', 'light');
          this.modalCtrl.dismiss( null, 'confirm' );
        } else {
          this.presentToast('No se pudo crear el Reporte', 'light');
        }
      });
    } else if (this.tipo === '9') {
      (await this.asmsSrvc.nuevoEnfermedad([data])).subscribe(async (resp: any) => {
        //console.log(resp);
        if (resp.status == 'success') {
          this.presentLoading('Creando Reporte');
          this.presentToast('Reporte creado satisfactoriamente', 'light');
          this.modalCtrl.dismiss( null, 'confirm' );
        } else {
          this.presentToast('No se pudo crear el Reporte', 'light');
        }
      });
    } else if (this.tipo === '10') {
      (await this.asmsSrvc.nuevoConducta([data])).subscribe(async (resp: any) => {
        //console.log(resp);
        if (resp.status == 'success') {
          this.presentLoading('Creando Reporte');
          this.presentToast('Reporte creado satisfactoriamente', 'light');
          this.modalCtrl.dismiss( null, 'confirm' );
        } else {
          this.presentToast('No se pudo crear el Reporte', 'light');
        }
      });
    }
  }

  async editarReporte() {
    let data = this.getData();
    console.log(data);
    if (this.tipo === '7') {
      (await this.asmsSrvc.editarPanial([data])).subscribe(async (resp: any) => {
        //console.log(resp);
        if (resp.status == 'success') {
          this.presentLoading('Modificando Reporte');
          this.presentToast('Reporte modificado satisfactoriamente', 'light');
          this.modalCtrl.dismiss( null, 'confirm' );
        } else {
          this.presentToast('No se pudo crear el Reporte', 'light');
        }
      });
    } else if (this.tipo === '8') {
      (await this.asmsSrvc.editarGolpe([data])).subscribe(async (resp: any) => {
        //console.log(resp);
        if (resp.status == 'success') {
          this.presentLoading('Modificando Reporte');
          this.presentToast('Reporte modificado satisfactoriamente', 'light');
          this.modalCtrl.dismiss( null, 'confirm' );
        } else {
          this.presentToast('No se pudo crear el Reporte', 'light');
        }
      });
    } else if (this.tipo === '9') {
      (await this.asmsSrvc.editarEnfermedad([data])).subscribe(async (resp: any) => {
        //console.log(resp);
        if (resp.status == 'success') {
          this.presentLoading('Modificando Reporte');
          this.presentToast('Reporte modificado satisfactoriamente', 'light');
          this.modalCtrl.dismiss( null, 'confirm' );
        } else {
          this.presentToast('No se pudo crear el Reporte', 'light');
        }
      });
    } else if (this.tipo === '10') {
      (await this.asmsSrvc.editarConducta([data])).subscribe(async (resp: any) => {
        //console.log(resp);
        if (resp.status == 'success') {
          this.presentLoading('Modificando Reporte');
          this.presentToast('Reporte modificado satisfactoriamente', 'light');
          this.modalCtrl.dismiss( null, 'confirm' );
        } else {
          this.presentToast('No se pudo crear el Reporte', 'light');
        }
      });
    }
  }

  async presentLoading(mensaje: string) {
    const loading = await this.loadingCtrl.create({
      message: mensaje,
      duration: 500,
    });
    loading.present();
  }

  async presentToast(msg: string, cl: string, pos: any = "bottom") {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: pos,
      color: cl,
    });
    await toast.present();
  }

  cerrar() {
    this.modalCtrl.dismiss( null, 'cancel' );
  }

}
