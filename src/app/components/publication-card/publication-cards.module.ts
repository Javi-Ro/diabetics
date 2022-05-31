import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationCardComponent } from './publication-card.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PublicationCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    PublicationCardComponent
  ]
})
export class PublicationCardModule { }
