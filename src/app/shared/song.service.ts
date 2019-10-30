import { Injectable } from '@angular/core';
import { Song } from './song';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SongService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  addSong(song: Song): Observable<any> {
    return this.http.post<Song>('/api/create-song', song, this.httpOptions)
      .pipe(
        catchError(this.handleError<Song>('Add Song'))
      );
  }

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>('/api/get-songs')
      .pipe(
        tap(songs => console.log('Songs retrieved!')),
        catchError(this.handleError<Song[]>('Get Songs', []))
      );
  }

  getSong(id): Observable<Song[]> {
    return this.http.get<Song[]>('/api/get-song/' + id)
      .pipe(
        tap(_ => console.log(`Song retrieved: ${id}`)),
        catchError(this.handleError<Song[]>(`Get Song id=${id}`))
      );
  }

  updateSong(id, song: Song): Observable<any> {
    return this.http.put('/api/update-song/' + id, song, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Song updated: ${id}`)),
        catchError(this.handleError<Song[]>('Update Song'))
      );
  }

  deleteSong(id): Observable<Song[]> {
    return this.http.delete<Song[]>('/api/delete-song/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Song deleted: ${id}`)),
        catchError(this.handleError<Song[]>('Delete Song'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}