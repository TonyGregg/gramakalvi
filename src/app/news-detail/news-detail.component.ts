import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event, EventsService } from '../shared/events.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  event: Event;
  constructor(private route: ActivatedRoute, private eventService: EventsService) { }

  ngOnInit() {
      const eventId: number = this.route.snapshot.params.eventId;
      this.event = this.eventService.getEventById(eventId);
  }

}
