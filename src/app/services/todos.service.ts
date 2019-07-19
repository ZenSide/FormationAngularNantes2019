import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable, of, zip } from 'rxjs';
import { UsersService } from './users.service';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  cache: Todo[];

  constructor(private http: HttpClient, private usersService:UsersService) { }

  clearCache(){
    this.cache = null;
  }

  getFreshTodos(){
    this.clearCache();
    return this.getTodos();
  }

  getTodos():Observable<Todo[]> {
    if (this.cache)
      return of(this.cache);

    return zip(
      this.http.get<Todo[]>(environment.apiUrl+"/todos"),
      this.usersService.getUsers()
    )
    .pipe(
      map((arrayResult)=>{
        const posts = arrayResult[0];
        const users = arrayResult[1];
        //const [posts, users] = arrayResult;
        posts.forEach(post=>{
          if (post.userId){
            post.user = users.find(user=>user.id == post.userId);
          }
        });
        return posts;
      }),
      tap(todos => {
        this.cache = todos;
      })
    )
  }

  addTodo(todo: Todo) {
    // l'id est le max id existant+1
    let id = 0;

    this.cache.forEach(t => { if (t.id > id) id = t.id });
    id++;
    todo.id = id;

    this.cache.unshift(todo);
  }

  nbTaskLeft() {
    return this.cache.filter(task => task.completed).length;
  }

  exists(t: Todo) {
    return this.cache.some(todo => todo.title == t.title);
  }
}
