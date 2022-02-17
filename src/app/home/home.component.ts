import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {

    // Example: if we want to navigate to a page after clicking a button which does complex calculations
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  // Sets loggedIn to true
  onLogin() {
    this.authService.login();
  }

  // Sets loggedIn to false
  onLogout() {
    this.authService.logout();    
  }

}
