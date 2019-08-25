import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Event {
  constructor(
    public id: number,
    public title: string,
    public details: string) {

    }

}
const events = [
  {
    id : 0,
    title : 'Educational assistance event',
    details : 'Educational event happened at Kumarakoil, Nagercoil.'
  },
  {
    id : 1,
    title : 'Career counseling event 1',
    details : 'Expert talk event to counsel 10th grade student to choose depart of study, conducted at Colachel, KK Dist'
  },
  {
    id : 2,
    title : 'Career counseling event 2',
    details : 'Expert talk event to counsel 10th grade student to choose depart of study, conducted at Marthandam, KK Dist'
  }
];


export class EventsService {

  getAllEvents(): Event[] {
    return events.map( e => new Event(e.id, e.title, e.details));
  }

  getEventById(eventId: number): Event {
    return events.find(e => e.id === eventId);
  }


  constructor() { }

}
