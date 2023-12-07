import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio4PageRoutingModule } from './ejercicio4-routing.module';

import { Ejercicio4Page } from './ejercicio4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio4PageRoutingModule
  ],
  declarations: [Ejercicio4Page]
})
export class Ejercicio4PageModule {}
