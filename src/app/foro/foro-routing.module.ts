import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationPublishComponent } from '../components/publication-publish/publication-publish.component';
import { PublicationCommentsPage } from '../publication-comments/publication-comments.page';

import { ForoPage } from './foro.page';

const routes: Routes = [
  {
    path: 'publish',
    component: PublicationPublishComponent
  },
  {
    path: ':id',
    component: PublicationCommentsPage
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
