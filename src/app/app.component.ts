import {Component, OnInit} from '@angular/core';

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

    userActivate1 = false;
    userActivate2 = false;

    constructor() {}
    ngOnInit() {
  
    }
}
