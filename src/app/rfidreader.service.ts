import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { RFIDReader} from './rfidreader';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RfidreaderService {

  private rfidUrl = environment.backendURL + 'rfidreader';  // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getAllRFIDReader (): Observable<RFIDReader[]> {
    return this.http.get<RFIDReader[]>(this.rfidUrl)
      .pipe(
        tap(webcams => this.log(`fetched AllRFIDReader`)),
        catchError(this.handleError('getAllRFIDReader', []))
      );
  }

  addRFIDReader(reader: RFIDReader){
    return this.http.post<RFIDReader>(this.rfidUrl,reader,httpOptions).
    pipe(
      tap(_ => this.log(`added new RFIDReader`)),
      catchError(this.handleError<any>('addRFIDReader'))
    );
  }

  deleteRFIDReader(reader: RFIDReader){
    const id = typeof reader === 'string' ? reader : reader.id;
    const url = `${this.rfidUrl}/${id}`;

    return this.http.delete<RFIDReader>(url,httpOptions).
    pipe(
      tap(_ => this.log(`added new RFIDReader`)),
      catchError(this.handleError<any>('deleteRFIDReader'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('RFIDReaderService: ' + message);
  }
}
