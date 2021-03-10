import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../../shared/player.model';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../../message.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  apiURL = 'http://localhost:3000/player';
  dataPLayer: Player[] = [];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public getPlayers() {
    return this.http
      .get<Player[]>(this.apiURL)
      .pipe(catchError(this.handleError<Player[]>('getPlayers', [])));
  }
  private log(message: string) {
    this.messageService.add('PlayerService: ${message}');
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
