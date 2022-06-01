import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoPageRoutingModule } from './foro-routing.module';

import { ForoPage } from './foro.page';
import { HttpClientModule } from '@angular/common/http';
import { PublicationCardModule } from '../components/publication-card/publication-cards.module';
import { PublicationCommentsPageModule } from '../publication-comments/publication-comments.module';
import { PublicationPublishComponent } from '../components/publication-publish/publication-publish.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForoPageRoutingModule,
    HttpClientModule,
    PublicationCardModule,
    PublicationCommentsPageModule,
  ],
  declarations: [ForoPage, PublicationPublishComponent]
})
export class ForoPageModule {}
