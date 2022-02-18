import { NgModule } from "@angular/core";

// Import Angular Routing Modules
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

// Declare the desired routes variable (const) and set up the routes array - each route is a JavaScript object {path: , component: } in this array
// Path '' ( without / ) is equivalent to: http://localhost:4200/ + remember to import the component 
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
  
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },  // Dynamically load some route and encode some data into our path
    ] },
    
    { path: 'servers',
    //  canActivate:[AuthGuard], 
     component: ServersComponent,
     canActivateChild: [AuthGuard], 
     children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }  // Passing Query Parameters and Fragments - Example: Route which allows us to edit a certain server
    ] },
  
    // Redirecting to page-not-found
    // {path: 'page-not-found', component: PageNotFoundComponent},

    // ErrorPageComponent - pass static data with the data property - allows us to pass an object where we can define any key-value pairs
    {path: 'page-not-found', component: ErrorPageComponent, data: {message: "Page not found!"}},
    {path: '**', redirectTo: 'page-not-found'}  // ** = wildcard route - catches unknown paths   ->   needs to be the last one in the array of routes (appRoutes)
  
];

@NgModule({

    // No need to add declarations as the components are already declared in the app.module

    imports: [
        // Import the RouterModule and pass your appRoutes constant as an argument -> registers the routes
        // RouterModule.forRoot(appRoutes)

        // Alternative: using Hash #  -> works on deployment even on servers which don't return the index.html file in case of 404 errors.
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],

    exports: [ RouterModule ]  // Export the configured RouterModule

})

export class AppRoutingModule {
    
}