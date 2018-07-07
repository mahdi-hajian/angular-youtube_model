import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ipost } from '../../Interfaces/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "http://localhost:35113/api/Companies";
  constructor(private http:HttpClient) { }

  getPost(){
    return this.http.get(this.url)
  }

  postPost(post:Ipost){
    return this.http.post(this.url, post );
  }

  putPost(post: Ipost, id: number){
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.url + '/' + id, post, {headers:header});
  }

  DeletePost(id: number){
    return this.http.delete(this.url + '/' + id);
  }
}
