import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-two-way-animation',
  templateUrl: './two-way-animation.component.html',
  styleUrls: ['./two-way-animation.component.css'],
  animations: [
    trigger('popOverState',[
      state('show',style({
        opacity: 1
      })),
      state('hide',style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class TwoWayAnimationComponent implements OnInit {
  show = false;

  constructor() { }

  ngOnInit() {
  }

  get getState(){
    return this.show? 'show': 'hide';
  }
  toggle(){
    this.show = !this.show;
  }
}
