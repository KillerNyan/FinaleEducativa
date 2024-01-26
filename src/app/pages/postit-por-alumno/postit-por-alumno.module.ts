import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostitPorAlumnoPageRoutingModule } from './postit-por-alumno-routing.module';

import { PostitPorAlumnoPage } from './postit-por-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostitPorAlumnoPageRoutingModule
  ],
  declarations: [PostitPorAlumnoPage]
})
export class PostitPorAlumnoPageModule {}
