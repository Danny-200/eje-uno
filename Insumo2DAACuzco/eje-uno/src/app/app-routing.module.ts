import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ejercicio2',
    loadChildren: () => import('./ejercicio2/ejercicio2.module').then( m => m.Ejercicio2PageModule)
  },
  {
    path: 'ejercicio3',
    loadChildren: () => import('./ejercicio3/ejercicio3.module').then( m => m.Ejercicio3PageModule)
  },
  {
    path: 'ejercicio4',
    loadChildren: () => import('./ejercicio4/ejercicio4.module').then( m => m.Ejercicio4PageModule)
  },
  {
    path: 'ejercicio5',
    loadChildren: () => import('./ejercicio5/ejercicio5.module').then( m => m.Ejercicio5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
