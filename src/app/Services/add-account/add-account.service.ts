import {Injectable, EventEmitter} from '@angular/core';
import {Details} from '../../Interface/details.interface';
import {AccountService} from '../account/account.service';

@Injectable({providedIn: 'root'})
export class AddAccountService {

    userAdded = new EventEmitter < Details > ();

    details: Details[] = [
        {
            name: 'mahdi',
            id: '1'
        }, {
            name: 'ali',
            id: '2'
        }, {
            name: 'mohsen',
            id: '3'
        }
    ];

    accountAdd(a: Details) {
        this
            .details
            .push(a);
        this
            .accountservice
            .LogString(a);
    }

    constructor(private accountservice: AccountService) {}
}
