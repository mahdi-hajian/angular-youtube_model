import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// add ReactiveFormsModule in app.module

@Component({
  selector: 'app-sing-up-reactive',
  templateUrl: './sing-up-reactive.component.html',
  styleUrls: ['./sing-up-reactive.component.css','../sing-up/sing-up.component.css']
})
export class SingUpReactiveComponent implements OnInit {
  genders =['', 'male', 'female'];
  inputForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      'info': new FormGroup({
        'username': new FormControl(null,Validators.required),
        'email': new FormControl(null,[Validators.required,Validators.email])
      }),
      'gender': new FormControl('male',Validators.required),
      'colors': new FormArray([])
    });
  }
  onSubmit(){
    console.log(this.inputForm.value);
  }
  onAddColorsClick(){
    
  }

}
