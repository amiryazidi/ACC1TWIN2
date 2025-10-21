import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { CardEventComponent } from './card-event/card-event.component';
import { BestEventComponent } from './best-event/best-event.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    DetailEventComponent,
    CardEventComponent,
    BestEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
