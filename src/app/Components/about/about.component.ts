import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PostService } from '../../Services/post/post.service';
import { Ipost } from '../../Interfaces/ipost';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('postname') namePost: ElementRef;
  @ViewChild('postdescription') descriptionPost: ElementRef;
  //
  @ViewChild('PutID') PutID: ElementRef;
  //
  array ;
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPost().subscribe((c) => {this.array = c}) ;   
    // this.postService.getPost().subscribe((c) => {console.log(c)}) ;   
  }

  PostElement(){
    let postItem: Ipost = {name:"", description:"", id: 0};
    postItem.name = this.namePost.nativeElement.value;
    postItem.description = this.descriptionPost.nativeElement.value;
    
    this.postService.postPost(postItem).subscribe(
      (c) => {console.log(c)}
    );
  }

  PutElement(){
    let id = +this.PutID.nativeElement.value;
    let postItem: Ipost = {name:'', description:'', id: 0};
    postItem.name = this.namePost.nativeElement.value;
    postItem.description = this.descriptionPost.nativeElement.value;

    this.postService.putPost(postItem,id).subscribe(c => console.log(c));
  }

  Deletelement(){
    let id = +this.PutID.nativeElement.value;
    this.postService.DeletePost(id).subscribe(c => console.log(c));
  }
}
