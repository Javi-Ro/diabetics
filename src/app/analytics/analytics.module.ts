import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalyticsPageRoutingModule } from './analytics-routing.module';

import { AnalyticsPage } from './analytics.page';
import { AlarmsComponent } from '../components/alarms/alarms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalyticsPageRoutingModule
  ],
  declarations: [AnalyticsPage, AlarmsComponent]
})
export class AnalyticsPageModule {}
