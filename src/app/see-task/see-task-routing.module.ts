import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeTaskPage } from './see-task.page';

const routes: Routes = [
  {
    path: '',
    component: SeeTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeTaskPageRoutingModule {}
