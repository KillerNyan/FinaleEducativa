import { Component, Input, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { AlumnosPostitPage } from '../alumnos-postit/alumnos-postit.page';

import { FilePicker } from '@capawesome/capacitor-file-picker';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-nuevo-postit',
  templateUrl: './nuevo-postit.page.html',
  styleUrls: ['./nuevo-postit.page.scss'],
})
export class NuevoPostitPage implements OnInit {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private strg: Storage, private asmsSrvc: AsmsServiceService) { }

  datosUsuario: any;
  codigoMaestro: string = '';
  seleccionados: any[] = [];
  data: any[] = [];
  conteo: number = 0;
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() nivel: string = '';
  titulo: string = '';
  descripcion: string = '';
  postitFiles: any[] = [];
  archivos: number = 0;
  
  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigoMaestro = this.datosUsuario.tipo_codigo;
  }

  async selectAlumnos(){
    const grad = this.grado;
    const secc = this.seccion;
    const niv = this.nivel;
    const pagina = await this.modalCtrl.create({
      component: AlumnosPostitPage,
      componentProps: {
        grado: grad,
        seccion: secc,
        nivel: niv,
        seleccionados: this.seleccionados
      }
    })
    await pagina.present();

    const { data } = await pagina.onWillDismiss();
    if( data.reemplazar ){
      this.seleccionados = data.seleccionados;
    }
    this.conteo = this.seleccionados.length;
  }

  async pickFile(  ){
    await FilePicker.pickFiles({
      types: ['application/pdf', 'images/jpg', 'images/jpeg', 'images/png', 'images/bmp'],
      multiple: true,
      readData: true
    }).then((file) => {
      //console.log(file);
      for(let i = 0; i < file.files.length; i++){
        const fileBase64 = file.files[i].data;
        const mimeType = 'data:' + file.files[i].mimeType + ';base64,';
        const docName = file.files[i].name;
        let docFile = this.dataUrltoFile(mimeType+fileBase64, docName);
        let ext = file.files[i].mimeType;
        this.postitFiles.push([docFile, ext]);
      }
      this.archivos = this.postitFiles.length;
      //console.log(this.archivos);
    }).catch( err => {
      console.log( err );
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

  async enviar(){
    if (this.titulo != ''){
      if (this.conteo != 0) {
        if (this.descripcion != '') {
          if (this.archivos != 0) {
            //array con (nivel, grado,seccion,maestro,titulo,descripcion)
            this.data = [{nivel: this.nivel, grado: this.grado, seccion: this.seccion, maestro: this.codigoMaestro, titulo: this.titulo, descripcion: this.descripcion, target: this.seleccionados.join()}];
            (await this.asmsSrvc.nuevoPostit(this.data)).subscribe(async (resp: any) => {
              let codigo = resp.codigo;
              //console.log('Inicia subida de Archivos');
              const loading = await this.loadingCtrl.create({
                message: 'Creando Post It',
                duration: 500 + (700 * this.postitFiles.length),
              });
              loading.present();
              for( let i = 0; i < this.postitFiles.length; i++ ){
                let file = this.postitFiles[i];
                let extension = file[1];
                //console.log(extension);
                if (extension == 'image/png' || extension == 'image/jpg' || extension == 'image/jpeg' || extension == 'image/bmp') {
                  (await this.asmsSrvc.ImgsPostit(codigo, extension, file[0])).subscribe((resp2: any) => {
                    //console.log(resp2);
                  });
                } else {
                  (await this.asmsSrvc.FilesPostit(codigo, extension, file[0])).subscribe((resp2: any) => {
                    //console.log(resp2);
                  });
                }
              }
              setTimeout(() => {
                this.modalCtrl.dismiss( null, 'confirm' );
                this.presentToast(resp.message, 'light');
              }, 700 * this.postitFiles.length);
            });
          } else {
            this.confirmAlert();
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
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Titulo Vacio',
        message: 'Debe ingresar un titulo.',
        buttons: ['Ok'],
      });
      await alert.present();
    }
  }

  async confirmAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Avertencia',
      message: 'El Post It se creara sin imagenes ni documentos, desea continuar?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
          return;
        },
      },  {
        text: 'Confirmar',
        role: 'confirm',
        cssClass: 'alert-button-confirm',
        handler: async () => {
          //array con (nivel, grado,seccion,maestro,titulo,descripcion)
          this.data = [{nivel: this.nivel, grado: this.grado, seccion: this.seccion, maestro: this.codigoMaestro, titulo: this.titulo, descripcion: this.descripcion, target: this.seleccionados.join()}];
          (await this.asmsSrvc.nuevoPostit(this.data)).subscribe(async (resp: any) => {
            const loading = await this.loadingCtrl.create({
              message: 'Creando Post It',
              duration: 1000,
            });
            loading.present();
            this.presentToast(resp.message, 'light');
            setTimeout(() => {
              this.modalCtrl.dismiss( null, 'confirm' );
            }, 1000);
          });
        },
      }],
    });
    await alert.present();
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
    this.modalCtrl.dismiss( null, 'cancel' );
  }

}
