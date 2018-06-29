import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../../Services/account/account.service';
import { Details } from '../../Interface/details.interface';
import { AddAccountService } from '../../Services/add-account/add-account.service';

@Component({
  selector: 'app-one-componenet',
  templateUrl: './one-componenet.component.html',
  styleUrls: ['./one-componenet.component.css']
})

export class OneComponenetComponent implements OnInit {

  constructor(private account: AccountService, private addAcount: AddAccountService) { }

  @ViewChild('InputName') name: ElementRef;
  @ViewChild('InputAge') id: ElementRef;
  ngOnInit() {
  }

  PushDetail() {
      const a: Details = { name: this.name.nativeElement.value, id: this.id.nativeElement.value};

      this.addAcount.accountAdd(a);

      this.addAcount.userAdded.emit(a);
  }
}
