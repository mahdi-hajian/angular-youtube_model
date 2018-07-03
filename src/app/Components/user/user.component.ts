import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/User/user.service';
import { Subscription, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  getIdFromURL: Subscription;
  userId = 0;
  constructor(private route:ActivatedRoute, private userService:UserService) { }
mahdi1: number = 0;
  ngOnInit() {
    this.getIdFromURL = this.route.params.subscribe(c => this.userId = c.id);

    const counter = interval(10);
    const mahdi = counter.subscribe((c) => {
      if(c == 250)
      {
        mahdi.unsubscribe();
      }
      this.mahdi1 = c;
    }
    )
  }
  setActive(){
    this.userService.userActivated.next(this.userId);
  }
  ngOnDestroy(): void {
    this.getIdFromURL.unsubscribe();
  }
}
