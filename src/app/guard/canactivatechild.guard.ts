import {  ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class canActivateChildGuard implements CanActivateChild {
    canActivateChild(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot):boolean{
        return true;
    }
}