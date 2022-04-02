import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  @Input() searchTerm: string;
  constructor() { }

  ngOnInit(): void {
  }


}
