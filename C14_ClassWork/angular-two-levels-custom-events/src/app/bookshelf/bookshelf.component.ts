import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  @Input() book: {title: string, author: string};
  constructor() { }

  ngOnInit(): void {
  }

  receiveBookEvent(book){
    console.log(book);

    this.book = book;
  }
}
