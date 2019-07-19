import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  connected:boolean = false;

  constructor(private router:Router) { }

  isConnected(){
    return this.connected;
  }

  login(){
    this.connected=true;
  }

  logout(){
    this.connected=false;
    this.router.navigate(['/']);
  }
}
