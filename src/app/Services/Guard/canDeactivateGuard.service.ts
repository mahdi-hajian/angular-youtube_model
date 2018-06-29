import {Injectable, Component} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

export interface ICanComponentDeactivate {
    canDeactivate: () => Observable < boolean > | Promise < boolean > | boolean;
}

@Injectable({providedIn: 'root'})

export class CanDeactivateGuardService implements CanDeactivate < ICanComponentDeactivate > {
    canDeactivate(
      component: ICanComponentDeactivate,
       currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot):
         Observable < boolean >| Promise < boolean >| boolean {
        return component.canDeactivate();
    }
}
