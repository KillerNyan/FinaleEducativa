import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostitPageRoutingModule } from './postit-routing.module';

import { PostitPage } from './postit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostitPageRoutingModule
  ],
  declarations: [PostitPage]
})
export class PostitPageModule {}
