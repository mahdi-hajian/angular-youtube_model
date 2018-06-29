import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LogInService} from './Services/Guard/logIn.service';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {

    // tslint:disable-next-line:use-life-cycle-interface
    async ngAfterViewInit() {
        await this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js');
        await this.loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
        await this.loadScript('https://use.fontawesome.com/releases/v5.0.6/js/all.js');
    }
    private loadScript(scriptUrl: string) {
        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document
                .body
                .appendChild(scriptElement);
        });
    }
    constructor(private router: Router, private loginSite: LogInService) {}
    ngOnInit() {
    }
    // tslint:disable-next-line:member-ordering
    title = 'app';
////
    LogInSite() {
        this
            .loginSite
            .logIn();
    }
    LogOutSite() {
        this
            .loginSite
.logOut();
setTimeout(() => {
this.router.navigate(['']);
}, 200);
    }
    //
    LogInAdminPanel() {
        this
            .loginSite
            .loggedInChildren = true;

    }
    LogOutAdminPanel() {
        this
.loginSite
.loggedInChildren = false;
setTimeout(() => {
this.router.navigate(['/adminPanel']);
}, 200);
    }
}
