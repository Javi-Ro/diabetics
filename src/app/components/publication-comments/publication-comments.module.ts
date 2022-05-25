import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PublicationCommentsComponent } from './publication-comments.component';
import { PublicationCardComponent } from '../publication-card/publication-card.component';

@NgModule({
  declarations: [PublicationCommentsComponent, PublicationCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
  
})
export class PublicationCommentsModule { }
