import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LivroListComponent } from './comps/livro/livro-list/livro-list.component';
import { LivroDetalhesComponent } from './comps/livro/livro-detalhes/livro-detalhes.component';
import { LoginComponent } from './comps/login/login.component';
import { UsuarioCadastroComponent } from './comps/usuario/usuario-cadastro/usuario-cadastro.component';
import { AuthGuard } from './authGuard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'livro', component: LivroListComponent, canActivate: [AuthGuard]  },
  { path: 'livro/novo', component: LivroDetalhesComponent, canActivate: [AuthGuard] },
  { path: 'livro/:id', component: LivroDetalhesComponent, canActivate: [AuthGuard] },
  { path: 'usuario', component: UsuarioCadastroComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
