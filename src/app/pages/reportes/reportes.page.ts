import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
