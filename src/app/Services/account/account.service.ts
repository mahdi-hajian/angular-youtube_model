import { Injectable } from '@angular/core';
import { Details } from '../../Interface/details.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  LogString(a:Details){
    console.log(a);
  }
  
  constructor() { }
}
