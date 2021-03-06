import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../../message.service';

import { Conquest } from 'src/app/shared/conquest.models';

@Injectable({
  providedIn: 'root'
})
export class ConquestService {
  apiURL = 'http://localhost:3000/conq';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public getConquest() {
    return this.http
      .get<Conquest[]>(this.apiURL)
      .pipe(catchError(this.handleError<Conquest[]>('getConquet', [])));
  }
  private log(message: string) {
    this.messageService.add('ConquestService: ${message}');
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
