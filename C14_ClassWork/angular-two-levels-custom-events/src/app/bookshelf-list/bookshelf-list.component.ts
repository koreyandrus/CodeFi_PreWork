import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.css']
})
export class BookshelfListComponent implements OnInit {
  books: {title: string, author: string}[] = [
    {title: 'The Hobbit', author: 'Tolkien'},
    {title: 'Life of Pi', author: 'Yann Martel'},
    {title: 'HTML and CSS', author: 'John Duckett'},
  ]

  @Output() bookEvent = new EventEmitter<{title: string, author: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  sendBook($event){
    this.bookEvent.emit($event)
  }

}
