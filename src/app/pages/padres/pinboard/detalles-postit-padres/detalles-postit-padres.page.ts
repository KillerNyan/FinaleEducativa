import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VerImagenesPage } from 'src/app/pages/ver-imagenes/ver-imagenes.page';
import { VisorPDFPage } from 'src/app/pages/visor-pdf/visor-pdf.page';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-detalles-postit-padres',
  templateUrl: './detalles-postit-padres.page.html',
  styleUrls: ['./detalles-postit-padres.page.scss'],
})
export class DetallesPostitPadresPage implements OnInit {

  detallesPostit: any[] = [];
  imagenes: any[] = [];
  @Input() codigoPostit: string = '';
  target: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetallePostItPadres(this.codigoPostit)).subscribe((detalles: any) => {
      if(Object.prototype.toString.call(detalles) === '[object Array]'){
        this.detallesPostit = detalles;
        this.target = this.detallesPostit[0].target
        console.log(detalles);
      }
    });
  }

  async verImg(noImg: number) {
    const img = this.detallesPostit[0].imagenes[noImg].imagen_url;
    const pagina = this.modalCtrl.create({
      component: VerImagenesPage,
      componentProps: {
        img,
      }
    });
    (await pagina).present();
  }

  async verDocumento(url: string) {
    let ext = url.split(".");
    ext.reverse();
    if (ext[0] == 'pdf'){
      let pdfSrc = url;
      const pinboard = true;
      const circular = false;
      const pagina = await this.modalCtrl.create({
        component: VisorPDFPage,
        componentProps: {
          pdfSrc,
          pinboard,
          circular,
        }
      });
      await pagina.present();
    } else {
      this.abrirEnlace(url);
    }
    //console.log(ext);
  }

  abrirEnlace(link: string) {
    window.open(link, '_system');
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
