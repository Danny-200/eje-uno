import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio5Page } from './ejercicio5.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio5PageRoutingModule {}
