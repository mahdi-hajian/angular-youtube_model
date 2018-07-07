import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ipost } from '../../Interfaces/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "http://localhost:35113/api/values";
  constructor(private http:HttpClient) { }

  getPost(){
    const header = new HttpHeaders({
      'Content-Type': 'application/json',

    });
    return this.http.get(this.url)
  }

  postPost(post:Ipost){
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.url, post, {headers: header});
  }

  putPost(post: Ipost, id: number){
    return this.http.put(this.url + '/' + id, post);
  }
}
