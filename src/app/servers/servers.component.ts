import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><p>Working inline html-template</p><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  userName = ''
  isUnchanged = true
  itemImageUrl = ''
  serverCreateStatus = ''
  serverName = 'Test server'
  serverCreated = false
  servers = ['Server 1', 'server 2']

  imageManager(operationType){
    if(operationType == 'add') {
      this.itemImageUrl = 'https://fakeimg.pl/350x200/ff0000/000'
    } else {
      this.itemImageUrl = ''
    }
  }
  onServerCreated() {
      this.servers.push(this.serverName)
     return this.serverCreateStatus = 'Created'
  }

  onUpdateServerName(event: Event) {
    this.serverName =  (event.target as HTMLInputElement).value;
  }

  clearUserName(){
    this.userName =  '';
  }
  

  constructor() {
    setTimeout(() => {
      // this.itemImageUrl = 'https://fakeimg.pl/350x200/ff0000/000'
      this.isUnchanged = false
    }, 3000)
   }

  ngOnInit(): void {
  }

}
