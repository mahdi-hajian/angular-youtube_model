import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
// add ReactiveFormsModule in app.module

@Component({
  selector: 'app-sing-up-reactive',
  templateUrl: './sing-up-reactive.component.html',
  styleUrls: ['./sing-up-reactive.component.css','../sing-up/sing-up.component.css']
})
export class SingUpReactiveComponent implements OnInit {
  genders =['', 'male', 'female'];
  inputForm: FormGroup;
  bannedEmail=['mahdi@mahdi', 'mohammad@mo']

  constructor() { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      'info': new FormGroup({
        'username': new FormControl(null,Validators.required, this.bannedUserName),
        'email': new FormControl(null,[Validators.required,Validators.email,this.bannedEmailCheck.bind(this)])
      }),
      'gender': new FormControl('male',Validators.required),
      'colors': new FormArray([])
    });
    ///////
    // this.inputForm.valueChanges.subscribe(
    //   (a) => console.log(a)
    // );
    this.inputForm.statusChanges.subscribe(
      (a) => console.log(a)
    );
  }
  onSubmit(){
    console.log(this.inputForm);
  }
  onAddColorsClick(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.inputForm.get('colors')).push(control);
  }
  bannedEmailCheck(control: FormControl): {[e: string]: boolean}{
    // if find him
    if (this.bannedEmail.indexOf(control.value) != -1) {
      return {'isBannedEmail':true}
    }
  }

  bannedUserName(control: FormControl): Promise<any> | Observable<any>{
      const promise =new Promise<any>((resolve, reject) =>{
        setTimeout(() => {
          if (control.value == 'mahdi') {
            resolve({'usenameIsBanned': true})
          } else {
            resolve (null);
          }
        }, 2000);
      });
      return promise
    }
    setdValue(){
      this.inputForm.patchValue({
        'info':{
          'username':'mohammad'
        },
        'gender': 'female'
      });
    }
}
