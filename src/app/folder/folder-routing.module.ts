import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: 'folder',
    component: FolderPage,
    children: [
      {
        path: 'foro',
        loadChildren: () => import('../foro/foro.module').then( m => m.ForoPageModule )
      },
      {
        path: '',
        redirectTo: '/folder/Foro',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/folder/Foro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
