import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeTaskPageRoutingModule } from './see-task-routing.module';

import { SeeTaskPage } from './see-task.page';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeTaskPageRoutingModule,
    HttpClientModule,
    ActivatedRoute
  ],
  declarations: [SeeTaskPage]
})
export class SeeTaskPageModule {}
