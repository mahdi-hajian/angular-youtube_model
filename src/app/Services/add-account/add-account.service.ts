import {Injectable, EventEmitter} from '@angular/core';
import {Details} from '../../Interface/details.interface';
import {AccountService} from '../account/account.service';

@Injectable({providedIn: 'root'})
export class AddAccountService {

    userAdded = new EventEmitter < Details > ();

    details : Details[] = [
        {
            name: 'mahdi',
            age: '21'
        }, {
            name: 'ali',
            age: '25'
        }, {
            name: 'mohsen',
            age: '30'
        }
    ];

    accountAdd(a : Details) {
        this
            .details
            .push(a);
        this
            .accountservice
            .LogString(a);
    }

    constructor(private accountservice : AccountService) {}
}
