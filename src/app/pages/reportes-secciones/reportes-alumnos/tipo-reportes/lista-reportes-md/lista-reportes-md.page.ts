import { Component, Input, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetalleReportesMDPage } from './detalle-reportes-md/detalle-reportes-md.page';
import { NuevoReportePage } from './nuevo-reporte/nuevo-reporte.page';

@Component({
  selector: 'app-lista-reportes-md',
  templateUrl: './lista-reportes-md.page.html',
  styleUrls: ['./lista-reportes-md.page.scss'],
})
export class ListaReportesMDPage implements OnInit {

  @Input() nivel: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() alumno: string = '';
  @Input() nombre: string = '';
  @Input() foto: string = '';
  @Input() tipo: string = '';
  reportes: any[] = [];

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, private loadingCtrl: LoadingController, private asmsSrvc: AsmsServiceService, private alertCtrl: AlertController) { }

  async ngOnInit() {
    this.getDataReportes();
  }

  async getDataReportes() {
    if (this.tipo === '7') {
      (await this.asmsSrvc.getReportesPañal(this.alumno)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.reportes = resp;
          console.log(resp);
        }
      });
    } else if (this.tipo === '8') {
      (await this.asmsSrvc.getReportesGolpe(this.alumno)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.reportes = resp;
          console.log(resp);
        }
      });
    } else if (this.tipo === '9') {
      (await this.asmsSrvc.getReportesEnfermedad(this.alumno)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.reportes = resp;
          console.log(resp);
        }
      });
    } else if (this.tipo === '10') {
      (await this.asmsSrvc.getReportesConducta(this.alumno)).subscribe((resp: any) => {
        if (Object.prototype.toString.call(resp) === '[object Array]') {
          this.reportes = resp;
          console.log(resp);
        }
      });
    }
  }

  async nuevoReporte() {
    const nuevo = true;
    const modificar = false;
    const pagina = await this.modalCtrl.create({
      component: NuevoReportePage,
      componentProps: {
        nuevo,
        modificar,
        nivel: this.nivel,
        grado: this.grado,
        seccion: this.seccion,
        tipo: this.tipo,
        nombre: this.nombre,
        foto: this.foto,
        alumno: this.alumno,
      }
    });
    await pagina.present();

    const { data, role } = await pagina.onWillDismiss();
    console.log(role);
    if (role === 'confirm') {
      this.getDataReportes();
    }
  }

  async verDetalles(pos: any) {
    const codigo = this.reportes[pos].codigo;
    const pagina = this.modalCtrl.create({
      component: DetalleReportesMDPage,
      componentProps: {
        codigo,
        tipo: this.tipo,
      }
    });
    (await pagina).present();
  }

  async editar(pos: any) {
    const nuevo = false;
    const modificar = true;
    const codigo = this.reportes[pos].codigo;
    //Para Reporte de Pañal
    const pipi = this.reportes[pos].pipi;
    const popo = this.reportes[pos].popo;
    const consistencia = this.reportes[pos].consistencia;
    const observaciones = this.reportes[pos].observaciones;
    //Para Reporte de Golpe
    const lugar = this.reportes[pos].lugar;
    const hora = this.reportes[pos].hora;
    const descripcion = this.reportes[pos].descripcion;
    const medida = this.reportes[pos].accion;
    const dosis = this.reportes[pos].dosis;
    //Para Reporte de Enfermedad
    const sintomas = this.reportes[pos].sintomas;
    const aviso = this.reportes[pos].se_aviso_a;
    //Para Reporte de Conducta
    const comportamiento = this.reportes[pos].calificacion;
    const pagina = await this.modalCtrl.create({
      component: NuevoReportePage,
      componentProps: {
        nuevo,
        modificar,
        codigo,
        pipi,
        popo,
        consistencia,
        observaciones,
        lugar,
        hora,
        descripcion,
        medida,
        dosis,
        sintomas,
        aviso,
        comportamiento,
        tipo: this.tipo,
        nombre: this.nombre,
        foto: this.foto,
        alumno: this.alumno,
      }
    });
    await pagina.present();

    const { data, role } = await pagina.onWillDismiss();
    console.log(role);
    if (role === 'confirm') {
      this.getDataReportes();
    }
  }

  async eliminar(pos: any) {
    const codigo = this.reportes[pos].codigo;
    if (this.tipo === '7') {
      (await this.asmsSrvc.eliminarPanial(codigo)).subscribe(async (resp: any) => {
        const loading = await this.loadingCtrl.create({
          message: 'Eliminando Reporte',
          duration: 1000,
        });
        loading.present();
        this.presentToast(resp.message, 'light');
        this.getDataReportes();
      });
    } else if (this.tipo === '8') {
      (await this.asmsSrvc.eliminarGolpe(codigo)).subscribe(async (resp: any) => {
        const loading = await this.loadingCtrl.create({
          message: 'Eliminando Reporte',
          duration: 1000,
        });
        loading.present();
        this.presentToast(resp.message, 'light');
        this.getDataReportes();
      });
    } else if (this.tipo === '9') {
      (await this.asmsSrvc.eliminarEnfermedad(codigo)).subscribe(async (resp: any) => {
        const loading = await this.loadingCtrl.create({
          message: 'Eliminando Reporte',
          duration: 1000,
        });
        loading.present();
        this.presentToast(resp.message, 'light');
        this.getDataReportes();
      });
    } else if (this.tipo === '10') {
      (await this.asmsSrvc.eliminarConducta(codigo)).subscribe(async (resp: any) => {
        const loading = await this.loadingCtrl.create({
          message: 'Eliminando Reporte',
          duration: 1000,
        });
        loading.present();
        this.presentToast(resp.message, 'light');
        this.getDataReportes();
      });
    }
  }

  async presentAlert(pos: any) {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: 'Esta seguro que quiere Eliminar este Reporte?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },  {
        text: 'Confirmar',
        role: 'confirm',
        cssClass: 'alert-button-confirm',
        handler: () => {
          this.eliminar(pos)
        },
      }],
    });
    await alert.present();
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
    this.modalCtrl.dismiss();
  }

}
