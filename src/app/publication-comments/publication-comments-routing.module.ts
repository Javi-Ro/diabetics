import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationCommentsPage } from './publication-comments.page';

const routes: Routes = [
  {
    path: '',
    component: PublicationCommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicationCommentsPageRoutingModule {}
