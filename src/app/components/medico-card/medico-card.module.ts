import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoCardComponent } from './medico-card.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MedicoCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ MedicoCardComponent ]
})
export class MedicoCardModule { }
