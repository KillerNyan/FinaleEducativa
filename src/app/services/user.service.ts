import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';

const loginUrl = environment.loginUrl;
const ajustesUrl = environment.loginUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data = null;
  tipoUsuario: any;
  datosUsuario: any;

  constructor( private http: HttpClient, private storage: Storage ) {
    this.storage.create();
   }

  login<T>( usu: any, password: any ){
    return new Promise (resolve => {
      this.http.get(`${loginUrl}login&usu=${usu}&pass=${password}`).subscribe(async (resp: any) => {
        if ( resp.status ){
          await this.datosLocalStorage( resp.data );
          await this.datosLocalStorageUsuario( resp.data );
          resolve(true);
        }else{
          this.data = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });
  }

  async datosLocalStorage( data: any ){
    this.storage.create();
    this.data = data;
    await this.storage.set('datos', data);
  }

  async datosLocalStorageUsuario( data: any ){
    this.storage.create();
    this.tipoUsuario = data.tipo_usuario;
    await this.storage.set('tipoUsuario', this.tipoUsuario);
  }
}
