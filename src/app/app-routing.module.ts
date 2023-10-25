import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ProductosComponent } from './pages/productos/productos.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('./starter-home/starter-home.module').then(m => m.StarterHomeModule),
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
