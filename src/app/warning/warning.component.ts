import { Component } from "@angular/core";

@Component({
  selector: '.app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})

export class WarningAlert {
  serverId = 10
  serverStatus = 'Offline'

  serverDetails() {
    return this.serverStatus
  }
}