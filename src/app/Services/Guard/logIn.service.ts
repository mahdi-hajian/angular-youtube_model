import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LogInService {

    constructor() {}

    loggedIn = true;
    loggedInChildren = true;

    isAthenticated() {
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(this.loggedIn);
          }, 700);
        });
        return promise;
    }

    isAthenticatedChild() {
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(this.loggedInChildren);
          }, 700);
        });
        return promise;
    }

    logIn() {
        this.loggedIn = true;
    }
    logOut() {
        this.loggedIn = false;
    }
}
