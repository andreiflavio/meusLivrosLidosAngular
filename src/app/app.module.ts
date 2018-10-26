import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LivroListComponent } from './comps/livro/livro-list/livro-list.component';
import { LivroDetalhesComponent } from './comps/livro/livro-detalhes/livro-detalhes.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './comps/login/login.component';
import { AuthInterceptor } from './interceptor';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './authGuard';
import { UsuarioCadastroComponent } from './comps/usuario/usuario-cadastro/usuario-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroListComponent,
    LivroDetalhesComponent,
    LoginComponent,
    UsuarioCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
