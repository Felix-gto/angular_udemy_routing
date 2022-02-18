import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from "@angular/router";

import { Observable } from "rxjs/Observable";

// Interface = "contract" which can be imported by another class - forces this class to provide some logic. Forces the component to implement the canDeactivate() method
// Doesn't contain logic, only information on how it should look like
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// Export the service itself - CanDeactivate = generic type (interface imported from @angular/router) which will wrap our own interface
// This class/guard needs to have a canDeactivate() method which will be called by the Angular Router once we try to leave a route
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(
    // Has the component we're currently on as an argument - of type CanComponentDEactivate = has this interface implemented (has a canDEactivate() method)
    component: CanComponentDeactivate,

    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Call the canDEactivate() method on the component we're currently on
    return component.canDeactivate();
  }
}
