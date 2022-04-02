import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  @Input() book: {title: string, author: string};
  @Output() bookSender = new EventEmitter<{title: string, author: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  receiveBookEvent($event){
    this.book = $event;
    this.bookSender.emit(this.book);
  }
}
