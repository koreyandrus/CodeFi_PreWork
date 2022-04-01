import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
users: {username: string, id: number}[] = [{username:'korey', id: 5}, {username:'korey2', id: 6}, {username:'korey3', id: 7}];
}
