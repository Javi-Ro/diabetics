import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisMedicosPageRoutingModule } from './mis-medicos-routing.module';

import { MisMedicosPage } from './mis-medicos.page';
import { HttpClientModule } from '@angular/common/http';
import { MedicoCardModule } from '../components/medico-card/medico-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisMedicosPageRoutingModule,
    HttpClientModule,
    MedicoCardModule
  ],
  declarations: [MisMedicosPage]
})
export class MisMedicosPageModule {}
