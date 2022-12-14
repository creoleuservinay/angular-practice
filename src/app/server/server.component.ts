import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10
  serverStatus = ''
  constructor(){
    this.serverStatus = Math.random() > 0.6 ? 'online' : 'Offline'
  }
  getColor(){
      return this.serverStatus === 'online' ? 'green' : 'red';
  }
}