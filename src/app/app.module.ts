import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

// Import Routing Angular modules
import { RouterModule, Routes } from '@angular/router';

// Declare the desired routes variable (const) and set up the routes array - each route is a JavaScript object {path: , component: } in this array
// Path '' ( without / ) is equivalent to: http://localhost:4200/ + remember to import the component 
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },

  { path: 'users/:id/:name', component: UserComponent },  // Dynamically load some route and encode some data into our path
  { path: 'servers', component: ServersComponent },

  // Passing Query Parameters and Fragments - Example: Route which allows us to edit a certain server
  { path: 'servers/:id/edit', component: EditServerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    // Import the RouterModule and pass your appRoutes constant as an argument -> registers the routes
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
