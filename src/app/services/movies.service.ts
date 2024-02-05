import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://www.omdbapi.com/?apikey=';
  private apiKey = '1c57ab32';
  private baseUrl = 'https://www.omdbapi.com/?apikey=1c57ab32';


  constructor(private http: HttpClient) { }

  public getMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}&s=avengers`);
  }

  getMoviesA(): Observable<HttpResponse<any>> {
    const url = `${this.apiUrl}${this.apiKey}&s=avengers`;
    return this.http.get<any>(url, { observe: 'response' });
  }

}

