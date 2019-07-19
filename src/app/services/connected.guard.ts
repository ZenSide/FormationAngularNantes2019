import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectedGuard  {

  constructor(private connectionService:ConnectionService,
    private router:Router){}
  
  canActivate():boolean {
    if (this.connectionService.isConnected())
      return true;
    else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
