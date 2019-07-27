import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Contest } from '../Models/contest';


@Injectable()
export class ContestService {

  baseURL = 'http://localhost:8081/pronos/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllContest(): Observable<Contest[]> {
    return this.http.get<Contest[]>(`${this.baseURL}/allcontest`, this.httpOptions);
  }

  public getContestById(id: number): Observable<Contest>{
    return this.http.get<Contest>(`${this.baseURL}/contest/${id}`,this.httpOptions);
  }

  createContest(contest: Contest): Observable<Contest> {
    return this.http.post<Contest>(`${this.baseURL}/contest`, contest, this.httpOptions);
  }

  modifyContest(id: number): Observable<Contest> {
    return this.http.put<Contest>(`${this.baseURL}/contest/${id}`, this.httpOptions);
  }

  deleteContestById(id: number): Observable<Contest> {
    return this.http.delete<Contest>(`${this.baseURL}/contest/${id}`, this.httpOptions);
  }
}