import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio4Page } from './ejercicio4.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio4PageRoutingModule {}
