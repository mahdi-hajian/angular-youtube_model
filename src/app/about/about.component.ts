import {Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';

@Component({selector: 'app-about', templateUrl: './about.component.html', styleUrls: ['./about.component.css']})
export class AboutComponent implements OnInit {

    constructor() {}

    ngOnInit() {}
    @ViewChild("inputeUser")inputvar : ElementRef;
    name ;
    onClick() {
        this.name = this.inputvar.nativeElement.value;
    }
}
