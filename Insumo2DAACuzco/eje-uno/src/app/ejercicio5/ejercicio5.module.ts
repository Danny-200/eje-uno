import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio5PageRoutingModule } from './ejercicio5-routing.module';

import { Ejercicio5Page } from './ejercicio5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio5PageRoutingModule
  ],
  declarations: [Ejercicio5Page]
})
export class Ejercicio5PageModule {}
