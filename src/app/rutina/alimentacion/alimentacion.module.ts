import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentacionPageRoutingModule } from './alimentacion-routing.module';

import { AlimentacionPage } from './alimentacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentacionPageRoutingModule
  ],
  declarations: [AlimentacionPage]
})
export class AlimentacionPageModule {}
