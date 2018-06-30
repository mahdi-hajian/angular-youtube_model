import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/User/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  getIdFromURL: Subscription;
  userId = 0;
  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    this.getIdFromURL = this.route.params.subscribe(c => this.userId = c.id);
  }
  setActive(){
    this.userService.userActivated.next(this.userId);
  }
  ngOnDestroy(): void {
    this.getIdFromURL.unsubscribe();
  }
}
