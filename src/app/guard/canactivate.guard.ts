import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot    } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class canActivateGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        return new Promise((resolved, rejected) => {
            setTimeout(()=>{resolved(true)},10)
        });
    }
}