import {Component, OnInit, OnDestroy} from '@angular/core';
import {IUser} from '../../Interface/IUser';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../Services/account/user.service';

@Component({
    selector: 'app-User',
     templateUrl: './User.component.html',
      styleUrls: ['./User.component.css']
    })
export class UserComponent implements OnInit, OnDestroy {

    constructor(private activeRoute: ActivatedRoute, private userService: UserService) {}

    user: IUser = {
        id: 0,
        name: ''
    };

    user2: IUser[] = [];
    userSubscription: Subscription;

    ngOnInit() {
      // اسینکرونس
        // this.user.id = this.activeRoute.snapshot.params['id']; this.user.name =
        // this.activeRoute.snapshot.params['name'];

        // اسینکرون
        // دقیقا همونا که توی یو ار اله نشون میده
       this.userSubscription = this
            .activeRoute
            .params
            .subscribe(params => {
                this.user.id = params['id'],
                this.user.name = params['name'];
            });
            // یوزر های یوزر سرویس رو میخونه
            this.user2 = this.userService.getUsers();
        }

    // نابود کردن اسینکرون بالا
    ngOnDestroy(): void {
      this.userSubscription.unsubscribe();
    }
}
