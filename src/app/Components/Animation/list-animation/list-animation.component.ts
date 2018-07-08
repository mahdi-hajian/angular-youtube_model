import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-list-animation',
  templateUrl: './list-animation.component.html',
  styleUrls: ['./list-animation.component.css'],
  animations: [
    trigger('photoAnimation', [
      transition('* => *', [
        query('img', style({transition: 'translateX(-100%)'})),
        query('img', stagger('600ms',[animate('900ms', style({transition: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class ListAnimationComponent implements OnInit {

  photos = [
    {photo: 'data:image/jpeg;base64,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'},
    {photo: 'data:image/jpeg;base64,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'},
    {photo: 'data:image/jpeg;base64,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'}
  ]
  constructor() { }

  ngOnInit() {
  }
  position: string;
  
  changePosition(newPosition: string){
    this.position = newPosition
  }
}
