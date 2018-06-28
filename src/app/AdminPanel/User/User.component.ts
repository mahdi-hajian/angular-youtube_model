import {Component, OnInit, OnDestroy} from '@angular/core';
import {IUser} from '../../Interface/IUser';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({selector: 'app-User', templateUrl: './User.component.html', styleUrls: ['./User.component.css']})
export class UserComponent implements OnInit, OnDestroy {

    constructor(private activeRoute : ActivatedRoute) {}

    user : IUser = {
        id: 0,
        name: ''
    }

    userSubscription:Subscription

    ngOnInit() {
      //اسینکرونس
        // this.user.id = this.activeRoute.snapshot.params['id']; this.user.name =
        // this.activeRoute.snapshot.params['name'];

        //اسینکرون
        this
            .activeRoute
            .params
            .subscribe(params => {
                this.user.id = params['id'],
                this.user.name = params['name']
            });
    }

    //نابود کردن اسینکرون بالا
    ngOnDestroy(): void {
      this.userSubscription.unsubscribe();
    }
}
