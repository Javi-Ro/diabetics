import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskPublishComponent } from '../components/task-publish/task-publish.component';
import { SeeTaskPage } from '../see-task/see-task.page';

import { TasksPage } from './tasks.page';

const routes: Routes = [
  {
    path: 'publish',
    component: TaskPublishComponent
  },
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
