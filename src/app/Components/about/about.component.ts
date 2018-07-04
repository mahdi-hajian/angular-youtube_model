import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  a = 1.22;
  b= 500;
  name1 = 'i am mahdi hajian';
  d = new Date(2018, 2, 5);
  dateNow: number = Date.now();
  grocery = [
    {name:"milk", condition:"expired"},
    {name:"cheese", condition:"expired"},
    {name:"juice", condition:"expired"},
    {name:"jam", condition:"good"},
    {name:"honey", condition:"good"}
  ];
  coffee = {name: 'coffee', condition: 'good'};

  filterString='';
  constructor() { }

  ngOnInit() {
  }
  addCoffee(){
    this.grocery.push(this.coffee)
  }

  username = new Promise((resolve, reject) =>
    {
      setTimeout(() => {
        return resolve ('mahdi') ;
      }, 2000);
    });
}
