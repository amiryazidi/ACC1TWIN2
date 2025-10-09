import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    DetailEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
