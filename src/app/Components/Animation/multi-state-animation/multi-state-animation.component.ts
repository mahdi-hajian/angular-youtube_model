import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-multi-state-animation',
  templateUrl: './multi-state-animation.component.html',
  styleUrls: ['./multi-state-animation.component.css'],
  animations: [
    trigger('photoState',[
      state('move', style({
        transform: 'translateX(-100%) translateY(50px)'
      })),
      state('enlarge', style({
        transform: 'scale(1.5)'
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)'
      })),
      transition('spin => move', animate('2000ms ease-out')),
      transition('* => *', animate('500ms ease'))
    ])
  ]
})
export class MultiStateAnimationComponent implements OnInit {
  position: string;
  photoUrl = 'http://www.pngpix.com/download/9275';

  constructor() { }

  ngOnInit() {
  }

  changePosition(newPosition: string){
    this.position = newPosition;
  }

}
