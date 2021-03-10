import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../../message.service';

import { Game } from 'src/app/shared/game.models';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  apiURL = 'http://localhost:3000/game';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public getGames() {
    return this.http
      .get<Game[]>(this.apiURL)
      .pipe(catchError(this.handleError<Game[]>('getPlayers', [])));
  }
  private log(message: string) {
    this.messageService.add('GameService: ${message}');
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
