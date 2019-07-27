import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { Event } from 'src/app/Models/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.sass']
})
export class CreateEventComponent implements OnInit {

  label: FormControl;
  eventDate: FormControl;
  openDate: FormControl;
  closeDate: FormControl;
  coeff: FormControl;
  
 
  eventForm: FormGroup;
  event: Event;

  constructor(private router: Router, private eventService: EventService, private builder: FormBuilder) { }

  ngOnInit() {
    
  this.label = new FormControl('', Validators.required);
  this.eventDate = new FormControl('', Validators.required);
  this.openDate = new FormControl('', Validators.required);
  this.closeDate = new FormControl('', Validators.required);
  this.coeff = new FormControl('', Validators.required);

  this.eventForm = this.builder.group({
  label: this.label,
  eventDate: this.eventDate,
  openDate: this.openDate,
  closeDate: this.closeDate, 
  coeff: this.coeff
  });
  }

onSubmit() {
  
  console.log("label : " + this.label.value);
  console.log("eventDate : " + this.eventDate.value);
  console.log("openDate : " + this.openDate.value);
  console.log("closeDate : " + this.closeDate.value);
  console.log("coeff : " + this.coeff.value);

 
  let event = new Event(null,this.label.value, this.eventDate.value, 
    this.openDate.value, this.closeDate.value, this.coeff.value,null);

    console.log(event)

  this.eventService.createEvent(event)
    .subscribe(
    data => this.event = data)

}
}
