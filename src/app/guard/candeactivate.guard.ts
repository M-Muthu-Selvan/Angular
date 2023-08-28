import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

export interface canDeactiveType{
    CanDeactive: ()=> boolean |  Promise<boolean>;
}

@Injectable({
    providedIn: "root"
})


export class canDeactiveGuard implements CanDeactivate<canDeactiveType> {
    canDeactivate(component:canDeactiveType, currentRoute:ActivatedRouteSnapshot  ,currentState:RouterStateSnapshot, nextState:RouterStateSnapshot ):any {
       return true;
    }
}

