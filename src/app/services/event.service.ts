import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Event } from 'src/app/Models/event';


@Injectable()
export class EventService {

  baseURL = 'http://localhost:8081/pronos/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllEvent(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseURL}/allevent`, this.httpOptions);
  }

  public getEventById(id: number): Observable<Event>{
    return this.http.get<Event>(`${this.baseURL}/event/${id}`,this.httpOptions);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseURL}/event`, event, this.httpOptions);
  }

  modifyEvent(id: number): Observable<Event> {
    return this.http.put<Event>(`${this.baseURL}/event/${id}`, this.httpOptions);
  }

  deleteEventById(id: number): Observable<Event> {
    return this.http.delete<Event>(`${this.baseURL}/event/${id}`, this.httpOptions);
  }
}