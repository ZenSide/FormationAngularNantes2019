import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems = {
    tasks: "Taches",
    ideas: "Idées",
    account: "Mon compte",
    myTasks: "Mes taches",
    myIdeas: "Mes idées"
  }

  constructor(private currentUserService:CurrentUserService, private connectionService:ConnectionService) { }

  ngOnInit() {
  }

  get user(){
    return this.currentUserService.getCurrentUser();
  }

  get connected(){
    return this.connectionService.isConnected();
  }

}
