import { Injectable } from '@angular/core';
import { Details } from '../../Interface/details.interface';

@Injectable({
  providedIn: 'root'
})
export class AddAccountService {

  details:Details[]=[
    {name:'mahdi',age:'21'},
    {name:'ali',age:'25'},
    {name:'mohsen',age:'30'}
  ];

  accountAdd(a:Details){
    this.details.push(a);
  }

  constructor() { }
}
