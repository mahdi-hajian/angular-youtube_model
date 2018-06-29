import {Component, OnInit, Input, Output, OnChanges, EventEmitter} from '@angular/core';
@Component({selector: 'app-star',
 templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,
OnChanges {

    constructor() {}

    ngOnInit() {}

    // tslint:disable-next-line:member-ordering
    startWitdh;
    // tslint:disable-next-line:member-ordering
    @Input('ratings')ratings;
    // tslint:disable-next-line:member-ordering
    @Output()starClicked = new EventEmitter < string > ();

    ngOnChanges() {
        this.startWitdh = this.ratings * 90 / 5;
    }
    onStarClicked() {
        this
            .starClicked
            .emit('rating is ' + this.ratings);
    }
}
