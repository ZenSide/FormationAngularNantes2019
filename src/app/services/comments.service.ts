import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import {Comment} from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  getPostComments(postId:number){
    return this.http.get<Comment[]>(environment.apiUrl+'/posts/'+postId+'/comments')
  }
}
