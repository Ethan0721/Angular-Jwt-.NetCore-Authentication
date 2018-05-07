import { Component } from '@angular/core';
import {AppUserAuth} from './security/app-user-auth';
import { SecurityService } from './security/security.service';
@Component({
  selector: 'ptc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  securityObject : AppUserAuth=null;
  title: string = "Paul's Training Company";
  constructor(private _security : SecurityService){
    this.securityObject = _security.securityObject;
  }

  logout() : void {
    this._security.logout();
  }
}
