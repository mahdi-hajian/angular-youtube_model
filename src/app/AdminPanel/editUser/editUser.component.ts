import { Component, OnInit } from '@angular/core';
import { IUser } from '../../Interface/IUser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Services/account/user.service';
import { ICanComponentDeactivate } from '../../Services/Guard/canDeactivateGuard.service';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-editUser',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css']
})
export class EditUserComponent implements OnInit, ICanComponentDeactivate {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router, private userFinder: UserService
  ) {}
    userID;
    userName;
    user: IUser;
    savechange = false;
    allow;
    ngOnInit() {
      // وقتی از سرویس کامپوننت میایم نشون میده
     this.activeRoute.queryParams.subscribe(q => console.log(q));
     this.activeRoute.queryParams.subscribe(q => this.allow = q.allowEdit);
     this.activeRoute.fragment.subscribe(q => console.log('fragment: ' + q));

     // وقتی از یوزر میایم اون یوزر رو از یوزر سرویس پیدا میکنه و نشون میده
     this.activeRoute.params.subscribe(c => this.user = this.userFinder.getuser(+c['id']));
      // this.user=this.userFinder.getuser(+this.activeRoute.snapshot.params['id']);
    }

    onSave() {
      this.user.id = this.userID;
      this.user.name = this.userName;
      this.userFinder.updateUser(this.user.id, this.user);
      this.router.navigate([ '/adminPanel', 0 , 'no' ]);
      this.savechange = true;
    }

  canDeactivate (): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allow) {
      return true;
    }

    if ((this.user.id !== this.userID || this.user.name !== this.userName) && !this.savechange) {
      return confirm('do you want exist withOut save');
    } else {
      return true;
    }
  }
}
