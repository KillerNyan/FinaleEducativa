import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { VisorPDFPage } from 'src/app/pages/visor-pdf/visor-pdf.page';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-detalles-circular-padres',
  templateUrl: './detalles-circular-padres.page.html',
  styleUrls: ['./detalles-circular-padres.page.scss'],
})
export class DetallesCircularPadresPage implements OnInit {

  datosUsuario: any;
  codigoPadre: string = '';
  circulares: any[] = [];
  @Input() codigo: string = '';
  //autorizacion: number = 0;
  
  constructor( private modalCtrl: ModalController, private strg: Storage, private toastCtrl: ToastController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigoPadre = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getDetalleCircularPadre(this.codigo, this.codigoPadre)).subscribe((circulares: any) => {
      if(Object.prototype.toString.call(circulares) === '[object Array]'){
        this.circulares = circulares;
        console.log(circulares);
      }
    });
  }

  async verPDF(pdfSrc: string) {
    const circular = true;
    const pinboard = false;
    const pagina = await this.modalCtrl.create({
      component: VisorPDFPage,
      componentProps: {
        pdfSrc,
        circular,
        pinboard,
      }
    });
    await pagina.present();
  }

  async autorizar(autorizacion: number){
    (await this.asmsSrvc.autorizacionCircular(this.codigo, this.codigoPadre, autorizacion)).subscribe((resp: any) => {
      this.presentToast(resp.message, 'light');
      this.modalCtrl.dismiss();
    });
  }

  async presentToast(msg: string, cl: string, pos : any = "bottom") {
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
