import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: 'folder/Foro',
    pathMatch: 'full'
  }, */
  {
    path: '',
    children: [
      {
        path: 'Foro',
        loadChildren: () => import('../foro/foro.module').then( m => m.ForoPageModule )
      },
      {
        path: 'Analytics',
        loadChildren: () => import('../analytics/analytics.module').then( m => m.AnalyticsPageModule )
      },
      {
        path: 'Tareas',
        loadChildren: () => import('../tasks/tasks.module').then( m => m.TasksPageModule )
      },
      {
        path: '',
        redirectTo: 'folder/Foro',
        pathMatch: 'full'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
