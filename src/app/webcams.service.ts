import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Webcam} from './webcam';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WebcamsService {

  private webcamUrl = environment.backendURL + 'webcams';  // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getWebcams (): Observable<Webcam[]> {
    return this.http.get<Webcam[]>(this.webcamUrl)
      .pipe(
        tap(webcams => this.log(`fetched webcams`)),
        catchError(this.handleError('getWebcams', []))
      );
  }

  addWebcam(webcam: Webcam){
    return this.http.post<Webcam>(this.webcamUrl,webcam,httpOptions).
    pipe(
      tap(_ => this.log(`added new webcam`)),
      catchError(this.handleError<any>('addWebcam'))
    );
  }

  deleteWebcam(webcam: Webcam){
    const id = typeof webcam === 'string' ? webcam : webcam.id;
    const url = `${this.webcamUrl}/${id}`;

    return this.http.delete<Webcam>(url,httpOptions).
    pipe(
      tap(_ => this.log(`added new webcam`)),
      catchError(this.handleError<any>('addWebcam'))
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
    this.messageService.add('HeroService: ' + message);
  }
}
