import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {Observable} from 'rxjs';
import {LogInService} from './logIn.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  
    constructor(private loginService : LogInService, private router : Router) {}

    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) :
     Observable < boolean > | Promise < boolean > | boolean {
        return this.loginService.isAthenticated().then(
          (auth:boolean) =>
          {
            if (auth) {
              return true
            } else {
              this.router.navigate(['']);
              alert('you is not admin');
              return false
            }
          }
        );
    }
//
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      boolean | Observable<boolean> | Promise<boolean> {
        return this.loginService.isAthenticatedChild().then(
          (auth:boolean) =>
          {
            if (auth) {
              return true
            } else {
              this.router.navigate(['/adminPanel']);
              alert('you dont have let to edit users');
              return false
            }
          }
        );
    }
    ////
}
