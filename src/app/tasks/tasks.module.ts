import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { TaskCardComponent } from '../components/task-card/task-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SeeTaskPage } from '../see-task/see-task.page';
import { TaskPublishComponent } from '../components/task-publish/task-publish.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TasksPage, TaskCardComponent, TaskPublishComponent]
})
export class TasksPageModule {}
