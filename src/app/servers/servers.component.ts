import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
allowNewServer = false ; 
serverCreationStatus:string="No Server was created!"
serverName = "Test Server"
serverCreated = false;
constructor(){
  setTimeout(()=>{
    this.allowNewServer=true
  },2000)
}

onCreateServer(){
  this.serverCreationStatus = "Server was created!  Name is "+this.serverName
  this.serverCreated = true
}
onUpdateServerName(event:any){
this.serverName = (<HTMLInputElement>event.target).value
console.log(event)
console.log(event.target.value)
}
}
