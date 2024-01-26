import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController, LoadingController, MenuController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { Storage } from '@ionic/storage';
import { AlertService } from 'src/app/services/alert.service';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };
  loginForm: FormGroup;

  datosUsuario: any;
  imagenes: any;
  logo: string = '';

  constructor(private navCtrl: NavController, private userService: UserService, public loadingController: LoadingController,
    private alertService: AlertService, private storage: Storage, private asmsSrvc: AsmsServiceService, 
    private menuCtrl: MenuController) {
    this.loginForm = this.createFormGroup();
  }

  async ngOnInit() {
    (await this.asmsSrvc.getImagenes()).subscribe((imagenes: any) => {
      this.imagenes = imagenes;
      this.logo = imagenes.data.logo;
    })
  }

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get nombre() { return this.loginForm.get('nombre'); }
  get password() { return this.loginForm.get('password'); }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

  async login() {
    this.presentLoading();
    const valid = await this.userService.login(this.loginForm.value.nombre, this.loginForm.value.password);
    if (valid) {
      await this.loadingController.dismiss();
      this.datosUsuario = await this.storage.get('datos');
      if (this.datosUsuario.tipo_usuario == '1' || this.datosUsuario.tipo_usuario == '2') {
        this.navCtrl.navigateRoot('/grados');
      } else if (this.datosUsuario.tipo_usuario == '3') {
        this.navCtrl.navigateRoot('/tab');
      } else {
        this.navCtrl.navigateRoot('/tab-hijos');
      }
    } else {
      this.loadingController.dismiss();
      const message = 'Usuario y/o Contraseña son incorrectos';
      this.alertService.presentToast(message, 'dark', 3000);
      this.loginForm.reset();
      this.storage.clear();
    }
  }

}

