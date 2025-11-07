import { Component } from '@angular/core';
import { Eventy } from '../../../model/eventy';
import { EventsService } from '../../../shared/service/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
events: Eventy[];
likedEvents: Eventy[] = [];
favorites: Eventy[] = [];

  today = new Date();
  searchTerm = '';
  constructor(private eventsService: EventsService) {
  }
  ngOnInit() {
    this.events = this.eventsService.events;
  }
  likeEvent(event: Eventy){
    let index= this.events.indexOf(event);
    this.eventsService.events[index].nbrLike++;


  }
}
