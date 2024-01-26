import { Component, Input, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

import { FilePicker } from '@capawesome/capacitor-file-picker';
import { AlumnosPhotoAlbumPage } from './alumnos-photo-album/alumnos-photo-album.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-nuevo-photo-album',
  templateUrl: './nuevo-photo-album.page.html',
  styleUrls: ['./nuevo-photo-album.page.scss'],
})
export class NuevoPhotoAlbumPage implements OnInit {

  constructor(private modalCtrl: ModalController, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private strg: Storage, private toastCtrl: ToastController, private asmsSrvc: AsmsServiceService) { }

  datosUsuario: any;
  codigoMaestro: string = '';
  seleccionados: any[] = [];
  conteo: number = 0;
  data: any[] = [];
  descripcion: string = '';
  photoFiles: any[] = [];
  archivos: number = 0;

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigoMaestro = this.datosUsuario.tipo_codigo;
  }

  async selectAlumnos() {
    const pagina = await this.modalCtrl.create({
      component: AlumnosPhotoAlbumPage,
      componentProps: {
        seleccionados: this.seleccionados
      }
    })
    await pagina.present();

    const { data } = await pagina.onWillDismiss();
    if (data.reemplazar) {
      this.seleccionados = data.seleccionados;
    }
    this.conteo = this.seleccionados.length;
  }

  async pickFile() {
    await FilePicker.pickFiles({
      types: ['images/jpg', 'images/jpeg', 'images/png', 'images/bmp'],
      multiple: true,
      readData: true
    }).then(async (file) => {
      for (let i = 0; i < file.files.length; i++) {
        const fileBase64 = file.files[i].data;
        const mimeType = 'data:' + file.files[i].mimeType + ';base64,';
        const docName = file.files[i].name;
        let docFile = this.dataUrltoFile(mimeType+fileBase64, docName);
        this.photoFiles.push([docFile]);
      }
      this.archivos = this.photoFiles.length;
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
    while (n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
  }

  async enviar() {
    if (this.conteo != 0) {
      if (this.descripcion != '') {
        if (this.archivos != 0) {
          //array con (nivel, grado,seccion,maestro,titulo,descripcion)
          this.data = [{ maestro: this.codigoMaestro, descripcion: this.descripcion, alumno: this.seleccionados.join() }];
          (await this.asmsSrvc.nuevoPhotoAlbum(this.data)).subscribe(async (resp: any) => {
            let codigo = resp.album;
            const loading = await this.loadingCtrl.create({
              message: 'Creando Photo Album',
              duration: 500 + (700 * this.photoFiles.length),
            });
            loading.present();
            for (let i = 0; i < this.photoFiles.length; i++) {
              let file = this.photoFiles[i];
              (await this.asmsSrvc.ImgsPhotoAlbum(codigo, file[0])).subscribe(async () => {
              });
            }
            setTimeout(() => {
              this.modalCtrl.dismiss( null, 'confirm' );
              this.presentToast(resp.message, 'light');
            }, 700 * this.photoFiles.length);
          });
        } else {
          const alert = await this.alertCtrl.create({
            header: '0 Imagenes Incluidas',
            message: 'Debe subir al menos una imagen.',
            buttons: ['Ok'],
          });
          await alert.present();
        }
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Descripcion Vacia',
          message: 'Debe ingresar una descripcion.',
          buttons: ['Ok'],
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertCtrl.create({
        header: '0 Alumnos Seleccionados',
        message: 'Debe seleccionar al menos un alumno.',
        buttons: ['Ok'],
      });
      await alert.present();
    }
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
