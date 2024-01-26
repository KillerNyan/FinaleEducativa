import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostSecPage } from './post-sec.page';

const routes: Routes = [
  {
    path: '',
    component: PostSecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostSecPageRoutingModule {}
