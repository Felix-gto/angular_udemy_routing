import { NgModule } from "@angular/core";

// Import Angular Routing Modules
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
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
    
    { path: 'servers', component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }  // Passing Query Parameters and Fragments - Example: Route which allows us to edit a certain server
    ] },
  
    // Redirecting to page-not-found
    {path: 'page-not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: 'page-not-found'}  // ** = wildcard route - catches unknown paths   ->   needs to be the last one in the array of routes (appRoutes)
  
];

@NgModule({

    // No need to add declarations as the components are already declared in the app.module

    imports: [
        // Import the RouterModule and pass your appRoutes constant as an argument -> registers the routes
        RouterModule.forRoot(appRoutes)
    ],

    exports: [ RouterModule ]  // Export the configured RouterModule

})

export class AppRoutingModule {
    
}