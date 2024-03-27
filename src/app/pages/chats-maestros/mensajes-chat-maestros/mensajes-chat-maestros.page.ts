import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-mensajes-chat-maestros',
  templateUrl: './mensajes-chat-maestros.page.html',
  styleUrls: ['./mensajes-chat-maestros.page.scss'],
})
export class MensajesChatMaestrosPage implements OnInit {

  @ViewChild('chatContainer')
  private chatContainer!: ElementRef;

  datosUsuario: any;
  codigoMD: string = '';
  tipoUsuMD: string = '';
  message: any;
  imagenes: any;
  logo: string = '';
  @Input() padre: string = '';
  @Input() chat: string = '';
  @Input() codigo: string = '';
  @Input() codigoP: string = '';
  @Input() tipoUsuP: string = '';
  mensajes: any[] = [];
  viewEntered: any;

  constructor( private modalCtrl: ModalController, private strg: Storage, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigoMD = this.datosUsuario.tipo_codigo;
    this.tipoUsuMD = this.datosUsuario.tipo_usuario;
    (await this.asmsSrvc.getImagenes()).subscribe((imagenes: any) => {
      this.imagenes = imagenes;
      this.logo = imagenes.data.logo;
    });
    if (this.chat != '') {
      (await this.asmsSrvc.getMensajesChatsPadres(this.codigo, this.chat)).subscribe((mensajes: any) => {
        if(Object.prototype.toString.call(mensajes) === '[object Array]'){
          this.mensajes = mensajes;
          console.log(mensajes);
        }
      });
    }
  }

  scrollToBottom(): void {
    const scrollElement = this.chatContainer.nativeElement;
    scrollElement.scrollTop = scrollElement.scrollHeight;
  }

  ionViewDidEnter() {
    this.viewEntered = true;
    this.scrollToBottom();
  }

  ionViewWillLeave(){
    this.viewEntered = false;
  }

  async enviarMessage() {
    if(this.chat != ''){
      console.log( this.chat, this.codigoMD, this.tipoUsuMD, this.message);
      (await this.asmsSrvc.postEnvioMensajesChatsPadres(this.chat, this.codigoMD, this.tipoUsuMD, this.message)).subscribe(async (resp: any) => {
        console.log(resp);
        this.message = '';
        (await this.asmsSrvc.getMensajesChatsPadres(this.codigo, this.chat)).subscribe((mensajes: any) => {
          if(Object.prototype.toString.call(mensajes) === '[object Array]'){
            this.mensajes = mensajes;
            setTimeout(() => {
              this.scrollToBottom();
            }, 300);
            console.log(mensajes);
          }
        });
      });
    }else{
      console.log( this.tipoUsuMD, this.codigoMD, this.tipoUsuP, this.codigoP, this.message);
      (await this.asmsSrvc.postMensajesChatsPadres(this.tipoUsuMD, this.codigoMD, this.tipoUsuP, this.codigoP, this.message)).subscribe(async (resp: any)=>{
        console.log(resp);
        this.chat = resp.dialogo;
        this.message = '';
        console.log(this.codigo, this.chat);
        (await this.asmsSrvc.getMensajesChatsPadres(this.codigo, this.chat)).subscribe((mensajes: any) => {
          if(Object.prototype.toString.call(mensajes) === '[object Array]'){
            this.mensajes = mensajes;
            setTimeout(() => {
              this.scrollToBottom();
            }, 300);
            console.log(mensajes);
          }
        });
      });
    }
  }

  /* async mostrarModalPDF(pdf: string) {
    let pdfSrc = pdf; 
    const modal = await this.modalCtrl.create({
      component: PdfViewerPage,
      backdropDismiss: false,
      componentProps: { pdfSrc }
    });
    await modal.present();      
  }  */

  cerrar() {
    this.modalCtrl.dismiss( null, 'confirm' );
  }

}
