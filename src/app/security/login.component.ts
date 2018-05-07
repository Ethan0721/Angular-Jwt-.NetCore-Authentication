import { ActivatedRoute, Router } from '@angular/router';
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
  returnUrl : string;
  constructor(private _securityService : SecurityService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }
  login(){
    this._securityService.login(this.user).subscribe(
      resp=>{ this.securityObject = resp 
      // inside if statement is checking if user suppose to visit a page 
      // if yes, then returnUrl will not be null and will navigate to the returnUrl
        if(this.returnUrl){
        this.router.navigateByUrl(this.returnUrl);
      }
      }
    );
  }

}
