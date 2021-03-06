import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['login']); // go to login if not authenticated
        return false;
      }
    return true;
  }
  // canActivate(){
  //   if (!this.authService.isLoggedIn()){
  //     return true;
  //   }
  //   this.router.navigate(['login']); // go to login if not authenticated
  //       return false;
  // }

//   constructor(
//     private authService: AuthService,
//     private router: Router) { }
// canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean | Promise<boolean> {
//     var isAuthenticated = this.authService.getAuthStatus();
//     if (!isAuthenticated) {
//         this.router.navigate(['/login']);
//     }
//     return isAuthenticated;
// }


  
}
