import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-keyframe-animation',
  templateUrl: './keyframe-animation.component.html',
  styleUrls: ['./keyframe-animation.component.css'],
  animations: [
    trigger('photoState',[
      state('move', style({
        transform: 'translateX(-100%)'
      })),
      state('enlarge', style({
        transform: 'scale(1.5)'
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)'
      })),
      transition('* => move',animate('2000ms',keyframes([
        style({transform: 'translateX(0)    rotateY(180deg)', offset: 0}),
        style({transform: 'translateX(50%)  rotateY(180deg)', offset: 0.33}),
        style({transform: 'translateX(-75%) rotateY(180deg)', offset: 0.66}),
        style({transform: 'translateX(-100%) ', offset: 1.0})
      ]))),
    ])
  ]
})
export class KeyframeAnimationComponent implements OnInit {
  position: string;
  photoUrl = 'http://www.pngpix.com/download/9275';

  constructor() { }

  ngOnInit() {
  }

  changePosition(newPosition: string){
    this.position = newPosition
  }
  logAnimation($event){
    console.log(`${this.position} animation ${$event.phaseName}`);
  }

}
