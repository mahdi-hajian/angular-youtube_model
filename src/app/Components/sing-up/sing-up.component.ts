import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  @ViewChild("in") inp:NgForm;
  DefualtGender = "";
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.inp);
  }
}
