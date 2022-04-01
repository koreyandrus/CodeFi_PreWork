import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input('inputUser') user: {username: string, id: number}
  constructor() { }

  ngOnInit(): void {
  }

}
