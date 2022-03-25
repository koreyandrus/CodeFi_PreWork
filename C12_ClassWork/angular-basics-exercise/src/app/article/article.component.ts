import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title: string = "angular question...";
  content: string = "How do I conditionally change what prints to the screen?";
  isTechRelated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
