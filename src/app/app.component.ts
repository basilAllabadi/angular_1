import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  serverId:number=2030;
  serverStatus:string="offline";
getServerStatus(){return this.serverStatus}
}
