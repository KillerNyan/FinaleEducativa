import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-visor-pdf',
  templateUrl: './visor-pdf.page.html',
  styleUrls: ['./visor-pdf.page.scss'],
})
export class VisorPDFPage implements OnInit {

  @Input() pdfSrc: string  = '';
  @Input() circular: boolean  = false;
  @Input() pinboard: boolean  = false;
  zoom: number = 1.0; // Valor inicial del zoom
  rotation: number = 0; // Valor inicial de la rotación

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
     (this.pdfSrc)
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  descargar() {
    window.open(this.pdfSrc, '_system');
  }

  zoomIn() {
    this.zoom += 0.1;
     ("x")
  }

  zoomOut() {
    if (this.zoom > 0.1) this.zoom -= 0.1;
  }

  rotate() {
    this.rotation += 90;
    if (this.rotation >= 360) {
      this.rotation = 0;
    }
  }

}
