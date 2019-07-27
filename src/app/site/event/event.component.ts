import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../Models/event';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {
  
  event: Event[];
  selectedEvent: Event;
  
  
 
  constructor(private router: Router, private eventService: EventService) { }
  

  ngOnInit() {

    this.event
    this.eventService.getAllEvent()
      .subscribe(
        data => this.event = data)

      
  }

   selectEvent(event: Event) {
    this.selectedEvent = event;
    let link = ['/event', event.id];
    this.router.navigate(link);
  }

  deleteEventById(id: number){
    this.eventService.deleteEventById(id).subscribe(
      value => {this.eventService.getAllEvent().subscribe(
        eventNew=> this.event = eventNew);
      })
    }

    getEventById(id: number){
      this.eventService.getEventById(id).subscribe(
        data => this.selectedEvent = data)
    }

  }