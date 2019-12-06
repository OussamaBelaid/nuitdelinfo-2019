import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events = [];
  constructor(private readonly eventsServices: EventsService) { }

  ngOnInit() {
    this.fetchAllEvents()
  }

  fetchAllEvents() {
    // this.eventsServices.fetchAll().subscribe(
    //   (response: any) => {
    //     this.events = response;
    //   } error => { }
    // )
  }

}
