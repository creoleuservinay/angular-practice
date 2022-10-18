import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><p>Working inline html-template</p><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isUnchanged = true
  itemImageUrl = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
  serverCreateStatus = 'No server was created'
  serverName = 'Test server'

  onServerCreated() {
    console.log('serverCreateserverCreate')
     return this.serverCreateStatus = 'Server is created'
  }

  onUpdateServerName(event: Event) {
    this.serverName =  (event.target as HTMLInputElement).value;
  }
  

  constructor() {
    setTimeout(() => {
      this.itemImageUrl = 'https://fakeimg.pl/350x200/ff0000/000'
      this.isUnchanged = false
    }, 3000)
   }

  ngOnInit(): void {
  }

}
