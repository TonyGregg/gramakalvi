export class EventOrganizer {
  id: number;
  title: string;
  details: string;
  constructor(id: number, title: string, details: string) {
    this.id = id;
    this.title = title;
    this.details = details;
  }
}
