import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    // Get the server id from the activated route (fyi if we parse a parameter from the url it will always be a string   ->  convert string to number by adding + in front)
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    // React to any future changes by subscribing to observables and get the new server
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });

  }

}
