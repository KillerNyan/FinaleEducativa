import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostitPage } from './postit.page';

const routes: Routes = [
  {
    path: '',
    component: PostitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostitPageRoutingModule {}
