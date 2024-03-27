import { Component, Input, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { register } from 'swiper/element/bundle';
import { VerImagenesPage } from '../ver-imagenes/ver-imagenes.page';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { VisorPDFPage } from '../visor-pdf/visor-pdf.page';

register();

@Component({
  selector: 'app-detalle-postit',
  templateUrl: './detalle-postit.page.html',
  styleUrls: ['./detalle-postit.page.scss'],
})
export class DetallePostitPage implements OnInit {

  datosUsuario: any;
  @Input() codigo: string = '';
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() fecha: string = '';
  @Input() alumno: string = '';
  @Input() imagenes: any[] = [];
  @Input() archivos: any[] = [];
  @Input() maestro: any[] = [];
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() nivel: string = '';
  data: any[] = [];
  postitFiles: any[] = [];
  docs: number = 0;

  constructor(private modalCtrl: ModalController, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private toastCtrl: ToastController, private asmsSrvc: AsmsServiceService, private strg: Storage) { }

  disabled: boolean = true;

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    if (this.datosUsuario.tipo_codigo == this.maestro) {
      this.disabled = false;
    }
    //console.log(this.imagenes);
  }

  async verImg(noImg: number) {
    const img = this.imagenes[noImg].imagen_url;
    const verImagen = await this.modalCtrl.create({
      component: VerImagenesPage,
      componentProps: {
        img,
      },
    });
    await verImagen.present();
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

  async pickFile() {
    await FilePicker.pickFiles({
      types: ['application/pdf', 'images/jpg', 'images/jpeg', 'images/png', 'images/bmp'],
      multiple: true,
      readData: true
    }).then(async (file) => {
      for (let i = 0; i < file.files.length; i++) {
        const fileBase64 = file.files[i].data;
        const mimeType = 'data:' + file.files[i].mimeType + ';base64,';
        const docName = file.files[i].name;
        let docFile = this.dataUrltoFile(mimeType + fileBase64, docName);
        const ext = file.files[i].mimeType;
        this.postitFiles.push([docFile, ext]);
      }
      this.docs = this.postitFiles.length;
    }).catch(err => {
      console.log(err);
      console.log('El usuario cancelo la accion de seleccionar un archivo.');
    });
  }

  dataUrltoFile(dataurl: any, filename: any) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    //console.log(bstr);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  async modificar() {
    //array con (codigo,materia,target,titulo,descripcion)
    this.data = [{ codigo: this.codigo, materia: '', target: '', titulo: this.titulo, descripcion: this.descripcion }];
    (await this.asmsSrvc.ModificarPostit(this.data)).subscribe(async (resp: any) => {
      const loading = await this.loadingCtrl.create({
        message: 'Modificando Post It',
        duration: 500 + (700 * this.postitFiles.length),
      });
      loading.present();
      for (let i = 0; i < this.postitFiles.length; i++) {
        let file = this.postitFiles[i];
        let extension = file[1];
        if (extension == 'image/png' || extension == 'image/jpg' || extension == 'image/jpeg' || extension == 'image/bmp') {
          (await this.asmsSrvc.ImgsPostit(this.codigo, extension, file[0])).subscribe(() => {
          });
        } else {
          (await this.asmsSrvc.FilesPostit(this.codigo, extension, file[0])).subscribe(() => {
          });
        }
      }
      setTimeout(() => {
        this.modalCtrl.dismiss(null, 'confirm');
        this.presentToast(resp.message, 'light');
      }, 500 + (700 * this.postitFiles.length));
    })
  }

  async eliminar() {
    (await this.asmsSrvc.EliminarPostit(this.codigo)).subscribe(async (resp: any) => {
      const loading = await this.loadingCtrl.create({
        message: 'Eliminando Post It',
        duration: 1000,
      });
      loading.present();
      this.presentToast(resp.message, 'light');
      setTimeout(() => {
        this.modalCtrl.dismiss(null, 'confirm');
      }, 1000);
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: 'Esta seguro que quiere Eliminar este Post It?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      }, {
        text: 'Confirmar',
        role: 'confirm',
        cssClass: 'alert-button-confirm',
        handler: () => {
          this.eliminar()
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
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
