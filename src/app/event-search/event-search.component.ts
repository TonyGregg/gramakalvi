import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {
  text = 'Search Page';

  constructor() { }

  ngOnInit() {
  }

}
