import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // Fetch Route Parameters (ok for first initialization - in case of subsequent data changes use observable as below)
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    
    // Fetch Route Parameters Reactively - using an observable (params) to which we subscribe if an event happens and data changes
    // Optional - Recommended in case of data changes/asynchronous tasks after which the component should be re-rendered

    this.route.params
      .subscribe((params: Params) => {   // Get updated params as argument (can set of type Params) -> update our user object
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

}
