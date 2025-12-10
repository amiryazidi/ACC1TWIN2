import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('🛡️ AuthGuard.canActivate() appelé pour:', state.url);
    
    if (this.auth.isLoggedIn()) {
      console.log('✅ Accès autorisé');
      return true;
    }

    console.log('❌ Accès refusé - Redirection vers /login');
    // redirect to login and include the attempted URL for redirect after sign-in
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
