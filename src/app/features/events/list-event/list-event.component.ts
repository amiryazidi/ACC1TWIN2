import { Component } from '@angular/core';
import { Eventy } from '../../../model/eventy';
import { EventsService } from '../../../shared/service/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
  searchTerm = '';
  events:Eventy[]=[];
  constructor(private eventS : EventsService) {
  }
  ngOnInit() {
    this.events=this.eventS.events
  }
}
