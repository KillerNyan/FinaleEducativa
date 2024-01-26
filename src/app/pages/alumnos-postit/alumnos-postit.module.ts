import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosPostitPageRoutingModule } from './alumnos-postit-routing.module';

import { AlumnosPostitPage } from './alumnos-postit.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosPostitPageRoutingModule,
    PipesModule
  ],
  declarations: [AlumnosPostitPage]
})
export class AlumnosPostitPageModule {}
