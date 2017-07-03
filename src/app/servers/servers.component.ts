import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  serverName = '';
  description = 'Nothing';
  isDisabled = true;

  constructor() { 
    setTimeout(()=> this.isDisabled=false, 2000);
  }

  ngOnInit() {
  }

  onClick() {
    this.description = 'A change happened!';
  }

  onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
