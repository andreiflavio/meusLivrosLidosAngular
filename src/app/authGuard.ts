import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.usuarioLogado()) {

      return true;
    } else {
      this.authService.logout();
      this.router.navigate(['/']);

      return false;
    }
  }
}
