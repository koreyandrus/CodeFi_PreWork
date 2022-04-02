import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book: {title: string, author: string};
  output : string;
  onReceiveBook($event) {
    // this.book = $event;
    this.output = $event.title + " by " + $event.author;
  }
}
