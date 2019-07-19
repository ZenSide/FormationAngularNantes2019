import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users:User[] = [
    {
      id: 1,
      name: "Nico",
      email: "a@b.com"
    },

    {
      id: 2,
      name: "Toto",
      email: "a@c.com"
    },

    {
      id: 3,
      name: "John",
      email: "a@a.com"
    }
  ];

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(environment.apiUrl+'/users');
  }

  getUser(id){
    return this.http.get<User>(environment.apiUrl+'/users/'+id);
  }
}
