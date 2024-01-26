import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostSecPageRoutingModule } from './post-sec-routing.module';

import { PostSecPage } from './post-sec.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostSecPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PostSecPage]
})
export class PostSecPageModule {}
