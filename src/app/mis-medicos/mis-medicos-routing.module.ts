import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisMedicosPage } from './mis-medicos.page';

const routes: Routes = [
  {
    path: '',
    component: MisMedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisMedicosPageRoutingModule {}
