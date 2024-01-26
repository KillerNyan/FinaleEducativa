import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
})
export class SoportePage implements OnInit {

  @Input() name: string = '';
  @Input() logo: string = '';
  data: any[] = [];
  pattern: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  soporteForm: FormGroup;

  constructor(private modalCtrl: ModalController, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private alertCtrl: AlertController, private asmsSrvc: AsmsServiceService) {
    this.soporteForm = this.createFormGroup();
   }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      telefono: new FormControl('', [Validators.required]),
      asunto: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required]),
    });
  }

  get nombre() { return this.soporteForm.get('nombre'); }
  get email() { return this.soporteForm.get('email'); }
  get telefono() { return this.soporteForm.get('telefono'); }
  get asunto() { return this.soporteForm.get('asunto'); }
  get mensaje() { return this.soporteForm.get('mensaje'); }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

  async enviar() {
    this.presentLoading();
    this.data = [{nombre: this.soporteForm.value.nombre, email: this.soporteForm.value.email, telefono: this.soporteForm.value.telefono, asunto: this.soporteForm.value.asunto, mensaje: this.soporteForm.value.mensaje}];
    (await this.asmsSrvc.sporteTecnico(this.data)).subscribe(async (resp: any) => {
      if (resp.status) {
        await this.loadingCtrl.dismiss();
        this.presentToast(resp.message, 'light');
        this.modalCtrl.dismiss();
      } 
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
