import { SecurityService } from './security.service';
import { AppUserAuth } from './app-user-auth';
import { Component, OnInit } from '@angular/core';
import { AppUser } from './app-user';

@Component({
  selector: 'ptc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : AppUser = new AppUser();
  securityObject : AppUserAuth=null;

  constructor(private _securityService : SecurityService) { }

  ngOnInit() {
  }
  login(){
    this._securityService.login(this.user).subscribe(
      resp=>{ this.securityObject = resp }
    );
  }

}
