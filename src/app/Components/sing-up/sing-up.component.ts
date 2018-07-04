import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  @ViewChild("in") inp: NgForm;
  DefualtGender = "";
  animals = ['cat', 'dog', 'monkey', 'horse'];
  WellcomeMessage = "";
  clickSubmit = false;

  constructor() { }

  ngOnInit() {
  }

  setDefualtValue(){
    this.inp.form.patchValue({
      UserGroup: {
        username: 'mahdi-hajian',
        email: 'mahdi.haj.1375@gmail.com'
      },
      gender: 0,
      animals: 2
    });
  }

  onSubmit(){
    console.log(this.inp);
    this.WellcomeMessage = this.inp.value.UserGroup.username;
    this.clickSubmit = true;
  }
}
