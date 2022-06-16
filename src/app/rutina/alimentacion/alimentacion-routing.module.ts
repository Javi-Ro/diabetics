import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentacionPage } from './alimentacion.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentacionPageRoutingModule {}
