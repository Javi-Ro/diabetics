import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeeTaskPage } from '../see-task/see-task.page';

import { TasksPage } from './tasks.page';

const routes: Routes = [
  {
    path: ':id',
    component: SeeTaskPage
  },
  {
    path: '',
    component: TasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
