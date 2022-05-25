import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationCommentsComponent } from '../components/publication-comments/publication-comments.component';

import { ForoPage } from './foro.page';

const routes: Routes = [
  {
    path: ':id',
    component: PublicationCommentsComponent
  },
  {
    path: '',
    component: ForoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForoPageRoutingModule {}
