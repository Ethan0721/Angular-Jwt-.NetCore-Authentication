import { SecurityService } from './security.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _securityService : SecurityService,
          private router : Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let claimType : string = next.data["claimType"];
      console.log(claimType);      
      if(this._securityService.securityObject.isAuthenticated && this._securityService.securityObject[claimType]){
        return true;
      }else{
        this.router.navigate(['login'], // back to login page 
        // and also tell the login page where we come from, queryParams is the Object name
        // state is the RouterStateSnapshot
        { queryParams : { returnUrl : state.url}} );
        // if(state.url ==='/products'){
        //   console.log('come from produts');
        // }else if(state.url ==='/categories'){
        //   console.log('come from categories');
        // }
         
      }
  }
}
