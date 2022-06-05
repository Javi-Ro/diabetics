import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeTaskPageRoutingModule } from './see-task-routing.module';

import { SeeTaskPage } from './see-task.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeTaskPageRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [SeeTaskPage],
  providers: []
})
export class SeeTaskPageModule {}
