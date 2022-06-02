import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlarmsComponent } from '../components/alarms/alarms.component';

import { AnalyticsPage } from './analytics.page';

const routes: Routes = [
  {
    path: 'alarm',
    component: AlarmsComponent
  },
  {
    path: '',
    component: AnalyticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsPageRoutingModule {}
