import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://moviesdatabase.p.rapidapi.com';
  private httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'e9e005fa40msh45b3b291c0e4e83p14bef4jsn379a46a0b5bd',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    })
  };
  constructor(private http: HttpClient) { }


  fetchData(): Observable<any> {
    const url = `${this.apiUrl}/titles`;
    const params = new HttpParams().set('limit', 9);
    return of(null).pipe(
      delay(5000),
      switchMap(() => this.http.get(url, { headers: this.httpOptions.headers, params }))
    );


  }
}
