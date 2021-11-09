import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/templates/navbar/navbar.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutosAddComponent } from './views/produtos/produtos-add/produtos-add.component';
import { ProdutosDeleteComponent } from './views/produtos/produtos-delete/produtos-delete.component';
import { ProdutosEditComponent } from './views/produtos/produtos-edit/produtos-edit.component';
import { ProdutosReadComponent } from './views/produtos/produtos-read/produtos-read.component';
import { ProdutosViewComponent } from './views/produtos/produtos-view/produtos-view.component';

// TODO: CHANGE ROUTES, NAVBAR SHOULD BE MAIN, THE REST CHILD
const routes: Routes = [
  {path: 'home', component: HomeComponent, children:[
    {path: '', component: NavbarComponent}
  ]},
  {path: 'produtos-delete/:id', component: ProdutosDeleteComponent},
  {path: 'produtos-view/:id', component: ProdutosViewComponent},
  {path: 'produtos-edit/:id', component: ProdutosEditComponent},
  {path: 'produtos-add', component: ProdutosAddComponent},
  {path: 'produtos', component: ProdutosReadComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
