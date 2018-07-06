import { Component, OnInit } from '@angular/core';
import { PostService } from '../../Services/post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private post:PostService) { }

  ngOnInit() {
  }

}
