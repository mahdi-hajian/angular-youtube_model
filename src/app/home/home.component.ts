import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {

    constructor() {}

    ngOnInit() {}

    stars = [2, 5, 2.5, 3.5, 4]
    writestar
    onClick(event) {
        this.writestar=event;
    }
}
