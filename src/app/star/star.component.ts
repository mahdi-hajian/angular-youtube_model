import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnChanges
} from '@angular/core';

@Component({selector: 'app-star', templateUrl: './star.component.html', styleUrls: ['./star.component.css']})
export class StarComponent implements OnInit,
OnChanges {

    constructor() {}

    ngOnInit() {}

    startWitdh;
    @Input('ratings')rating;
    @Output()starClicked = new EventEmitter < string > ();

    ngOnChanges() {
        this.startWitdh = this.rating * 90 / 5;
    }
    onStarClicked() {
        this.starClicked.emit('rating is '+this.rating)
    }
}