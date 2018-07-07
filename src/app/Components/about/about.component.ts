import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PostService } from '../../Services/post/post.service';
import { Ipost } from '../../Interfaces/ipost';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('postUserId') UserIdPost: ElementRef;
  @ViewChild('postTitle') TitlePost: ElementRef;
  @ViewChild('postBody') BodyPost: ElementRef;
  //
  @ViewChild('PutID') PutID: ElementRef;
  //
  array ;
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPost().subscribe((c) => {this.array = c})    
  }

  // PostElement(){
  //   let postItem: Ipost = {UserID:0, Title:'', Body:''};
  //   postItem.UserID = +this.UserIdPost.nativeElement.value;
  //   postItem.Title = this.TitlePost.nativeElement.value;
  //   postItem.Body = this.BodyPost.nativeElement.value;
  //   this.postService.postPost(postItem).subscribe(
  //     (c => console.log(c))
  //   );
  // }

  // PutElement(){
  //   let id = +this.PutID.nativeElement.value;
  //   let postItem: Ipost = {UserID:0, Title:'', Body:''};
  //   postItem.UserID = +this.UserIdPost.nativeElement.value;
  //   postItem.Title = this.TitlePost.nativeElement.value;
  //   postItem.Body = this.BodyPost.nativeElement.value;

  //   this.postService.putPost(postItem,id).subscribe(c => console.log(c));
  // }

}
