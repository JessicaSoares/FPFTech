import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './component/produto/produto.component';
import { CategoriaComponent } from './component/categoria/categoria.component';

const routes: Routes = [
{path: 'produto', component: ProdutoComponent},
{path: 'categoria', component: CategoriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
