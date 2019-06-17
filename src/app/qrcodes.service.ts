import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { saveAs } from 'file-saver/FileSaver';
import { Response } from '@angular/http';
import { Drache } from './drache';
import { AG } from './ag';
import { DracheActivity } from './dracheactivity';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders(
    { 'responseType': 'text' }
    //{ 'Content-Type': 'multipart/form-data;' }
  )
};
/**
 * Saves a file by opening file-save-as dialog in the browser
 * using file-save library.
 * @param blobContent file content as a Blob
 * @param fileName name file should be saved as
 */
export const saveFile = (blobContent: Blob, fileName: string) => {
  const blob = new Blob([blobContent], { type: 'application/pdf' });
  saveAs(blob, fileName);
};

@Injectable()
export class QrcodesService {
  
  private backendURL = environment.backendURL;
  private bffURL=environment.backendURL + 'drachen'

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  postFile(fileToUpload: File): Observable<String> {
    const endpoint = `${this.bffURL}/upload`;
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http
      .post<String>(endpoint, formData, httpOptions);
}

postAGFile(fileToUpload: File): Observable<String> {
  const endpoint = `${this.backendURL}/ag/upload`;
  const formData: FormData = new FormData();
  formData.append('file', fileToUpload, fileToUpload.name);
  return this.http
    .post<String>(endpoint, formData, httpOptions);
}

public getQRCodes() {
  const endpoint = `${this.bffURL}/qrcode`;
  this.http.get(endpoint, {responseType:"blob"})
    .subscribe(res => {
      saveFile(res, "qrcodes.pdf");
    });
}
public excused(dactivity: DracheActivity){
  const endpoint = `${this.bffURL}/activity/excused`;
  return this.http.post<DracheActivity>(endpoint,dactivity,httpOptions).
    pipe(
      tap(_ => this.log(`set the status to excused`)),
      catchError(this.handleError<any>('excused'))
    );
}

public initialise(day: String){
  const endpoint = `${this.bffURL}/activity/initialise`;
  return this.http.post<String>(endpoint,day,httpOptions).
    pipe(
      tap(_ => this.log(`set the status to excused`)),
      catchError(this.handleError<any>('excused'))
    );
}

public checkin(dactivity: DracheActivity){
  const endpoint = `${this.bffURL}/activity/checkin`;
  return this.http.post<DracheActivity>(endpoint,dactivity,httpOptions).
    pipe(
      tap(_ => this.log(`added new activity`)),
      catchError(this.handleError<any>('checkin'))
    );
}
public checkout(dactivity: DracheActivity){
  const endpoint = `${this.bffURL}/activity/checkout`;
  return this.http.post<DracheActivity>(endpoint,dactivity,httpOptions).
    pipe(
      tap(_ => this.log(`added new activity`)),
      catchError(this.handleError<any>('checkout'))
    );
}
public setroom(dactivity: DracheActivity){
  const endpoint = `${this.bffURL}/activity/setroom`;
  return this.http.post<DracheActivity>(endpoint,dactivity,httpOptions).
    pipe(
      tap(_ => this.log(`added new activity`)),
      catchError(this.handleError<any>('setroom'))
    );
}
public setHomework(dactivity: DracheActivity){
  const endpoint = `${this.bffURL}/activity/sethomework`;
  return this.http.post<DracheActivity>(endpoint,dactivity,httpOptions).
    pipe(
      tap(_ => this.log(`added new activity`)),
      catchError(this.handleError<any>('sethomework'))
    );
}

public setEssen(dactivity: DracheActivity){
  const endpoint = `${this.bffURL}/activity/setessen`;
  return this.http.post<DracheActivity>(endpoint,dactivity,httpOptions).
    pipe(
      tap(_ => this.log(`added new activity`)),
      catchError(this.handleError<any>('setessen'))
    );
}

public getAllDrachen(): Observable<Drache[]> {
  return this.http.get<Drache[]>(this.bffURL)
    .pipe(
      tap(heroes => this.log(`fetched drachen`)),
      catchError(this.handleError('getAllDrachen', []))
    );
}

public getAllAgs(): Observable<AG[]> {
  const endpoint = `${this.backendURL}/ag`;
  return this.http.get<AG[]>(endpoint)
    .pipe(
      tap(heroes => this.log(`fetched ag`)),
      catchError(this.handleError('getAllAgs', []))
    );
}

public getAllDrachenActivity(): Observable<DracheActivity[]> {
  return this.http.get<DracheActivity[]>(`${this.bffURL}/activity`)
    .pipe(
      tap(heroes => this.log(`fetched drachenactivity`)),
      catchError(this.handleError('getAllDrachenActivity', []))
    );
}

public getAllInDrachenActivity(): Observable<DracheActivity[]> {
  return this.http.get<DracheActivity[]>(`${this.bffURL}/activity/in`)
    .pipe(
      tap(heroes => this.log(`fetched drachenactivity`)),
      catchError(this.handleError('getAllInDrachenActivity', []))
    );
}

public getDistinctSchoolclass(): Observable<string[]> {
  return this.http.get<string[]>(`${this.bffURL}/activity/schoolclass`)
    .pipe(
      tap(heroes => this.log(`fetched schoolclass`)),
      catchError(this.handleError('getDistinct', []))
    );
}

public getDistinctStart(): Observable<string[]> {
  return this.http.get<string[]>(`${this.backendURL}/ag/start`)
    .pipe(
      tap(heroes => this.log(`fetched ag start`)),
      catchError(this.handleError('getDistinctStart', []))
    );
}

public getAGList(): Observable<string[]> {
  return this.http.get<string[]>(`${this.backendURL}/ag/list`)
    .pipe(
      tap(heroes => this.log(`fetched ag list`)),
      catchError(this.handleError('getAGList', []))
    );
}


public getDistinctArrival(): Observable<string[]> {
  return this.http.get<string[]>(`${this.bffURL}/activity/arrival`)
    .pipe(
      tap(heroes => this.log(`fetched schoolclass`)),
      catchError(this.handleError('getDistinctArrival', []))
    );
}

public getDistinctLeaving(): Observable<string[]> {
  return this.http.get<string[]>(`${this.bffURL}/activity/leaving`)
    .pipe(
      tap(heroes => this.log(`fetched schoolclass`)),
      catchError(this.handleError('getDistinctLeaving', []))
    );
}


public getAllHomeworkDrachenActivity(): Observable<DracheActivity[]> {
  return this.http.get<DracheActivity[]>(`${this.bffURL}/activity/homework`)
    .pipe(
      tap(heroes => this.log(`fetched drachenactivity`)),
      catchError(this.handleError('getAllHomeworkDrachenActivity', []))
    );
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('QrcodesService: ' + message);
  }
}
