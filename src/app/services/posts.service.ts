import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, zip } from 'rxjs/operators';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient, private usersService:UsersService) { }

  getPosts(){

    return this.http.get<Post[]>(environment.apiUrl+"/posts");
  }

  getUserPosts(userId:number) {
    return this.getPosts()
      .pipe(map((posts:Post[])=>{
        return posts.map(post=>post.userId==userId)
      })
      )
  }

}
