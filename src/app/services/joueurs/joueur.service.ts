import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Joueurs } from 'src/app/Models/joueur';

@Injectable()
export class JoueurService {

  baseURL = 'http://localhost:8081/pronos/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllPlayer(): Observable<Joueurs[]> {
    return this.http.get<Joueurs[]>(`${this.baseURL}/allplayer`, this.httpOptions);
  }

  public getPlayerById(id: number): Observable<Joueurs>{
    return this.http.get<Joueurs>(`${this.baseURL}/player/${id}`,this.httpOptions);
  }

  createPlayer(player: Joueurs): Observable<Joueurs> {
    return this.http.post<Joueurs>(`${this.baseURL}/player`, player, this.httpOptions);
  }

  modifyPlayer(id: number): Observable<Joueurs> {
    return this.http.put<Joueurs>(`${this.baseURL}/player/${id}`, this.httpOptions);
  }

  deletePlayerById(id: number): Observable<Joueurs> {
    return this.http.delete<Joueurs>(`${this.baseURL}/player/${id}`, this.httpOptions);
  }
}