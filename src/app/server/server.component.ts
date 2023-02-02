import { Component } from "@angular/core";

@Component({
    selector: 'app-server' //unique name to use this component in other html components
    ,
    templateUrl: './server.component.html', // its html file path 
  
//another way /// you can use template without url and equal it to '<app-server></app-server> this is when you dont have very much html '
})

export class ServerComponent {
serverId :number = 10;
serverStatus : string = "Offline"
;getServerStatus(){
    return this.serverStatus
}

}