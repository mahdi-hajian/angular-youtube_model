import {Component, OnInit} from '@angular/core';
import {AddAccountService} from '../../Services/add-account/add-account.service';
import {Details} from '../../Interface/details.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-two-componenet',
   templateUrl: './two-componenet.component.html',
  styleUrls: ['./two-componenet.component.css'
]})
export class TwoComponenetComponent implements OnInit {

    constructor(private addAccount: AddAccountService, private router: Router) {}

    accounts: Details[] = [];
    ngOnInit() {
        this.accounts = this.addAccount.details;

        this
            .addAccount
            .userAdded
            .subscribe((detail: Details) => alert(detail.name + '  ' + detail.id));
    }
    onClickEdit(id: number) {
        this
            .router
            .navigate([
                '/adminPanel', id, 'edit'
            ], {
                queryParams: {
                    allowEdit: 1
                },
                fragment: 'parag1'
            });
    }
}
