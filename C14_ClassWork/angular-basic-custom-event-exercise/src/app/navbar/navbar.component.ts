import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  mySearch: string ="";

  @Output() mySearchEvent = new EventEmitter<string>();

  sendMySearch() {
    this.mySearchEvent.emit(this.mySearch);
  }
}
