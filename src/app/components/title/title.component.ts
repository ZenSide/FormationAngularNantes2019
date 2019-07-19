import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  title:string = 'Super site';

  constructor(private connectionService:ConnectionService) { }

  login(){
    this.connectionService.login();
  }

  logout(){
    this.connectionService.logout();
  }

  get isConnected(){
    return this.connectionService.isConnected();
  }

  ngOnInit() {
  }

}
