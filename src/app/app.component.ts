import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testingapp';
  servers: string[] = [];
  allowNewServer = true;
  serverCreationStatus = 'No server is created.';
  serverName = 'TestServer';
  serverCreated = false;

  ngOnInit() { }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server is created. Name of the server is' + this.serverName;
    this.allowNewServer = false;
  }

  OnUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  OnAddServer() {
    this.servers.push('Another Server Added');
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
    if (this.servers.length == 1) {
      this.allowNewServer = true;
    }
  }
}
