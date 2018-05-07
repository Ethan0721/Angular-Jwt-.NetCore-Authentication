import { LOGIN_MOCKS } from './login-mocks';
import { AppUserAuth } from './app-user-auth';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import { AppUser } from './app-user';

@Injectable()
export class SecurityService {

  securityObject : AppUserAuth = new AppUserAuth();

  constructor() { }

  resetSecurityObject() : void {
    this.securityObject.userName = "";
    this.securityObject.bearerToken="";
    this.securityObject.isAuthenticated=false;
    
    this.securityObject.canAccessProducts = false;
    this.securityObject.canSaveProduct=false;
    this.securityObject.canAddCategory=false;
    this.securityObject.canAddProducts=false;
    this.securityObject.canAccessCategories=false;

    localStorage.removeItem("bearerToken");
  }

  login(entity : AppUser) : Observable<AppUserAuth>{

    // reset security object
    this.resetSecurityObject();
    //copy properities using Object.assign() 
    //if create a new object will destroys all reference to object. 
    Object.assign(this.securityObject, LOGIN_MOCKS.find(
      user=>user.userName.toLocaleLowerCase() === entity.userName.toLowerCase()));
    
      if(this.securityObject.userName !== ""){
      localStorage.setItem("bearerToken", this.securityObject.bearerToken);
    }
    return of<AppUserAuth>(this.securityObject);
  }

  logout(){
    this.resetSecurityObject();
  }
}
 