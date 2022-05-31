import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicationCommentsPageRoutingModule } from './publication-comments-routing.module';

import { PublicationCommentsPage } from './publication-comments.page';
import { PublicationCardModule } from '../components/publication-card/publication-cards.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicationCommentsPageRoutingModule,
    PublicationCardModule,
  ],
  declarations: [PublicationCommentsPage]
})
export class PublicationCommentsPageModule {}
