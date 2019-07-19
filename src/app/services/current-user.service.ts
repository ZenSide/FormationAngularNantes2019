import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private user:User;

  constructor(private usersService:UsersService) {
    this.usersService.getUser(1).subscribe(user=>this.user=user);
  }

  getCurrentUser(){
    return this.user;
  }

}
