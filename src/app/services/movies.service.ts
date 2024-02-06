import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../interfaces/responseApi';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_URL: string = 'http://www.omdbapi.com/?apikey=1c57ab32';

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]> {
    return this.http.get<ApiResponse>(`${this.API_URL}&s=${searchTerm}`).pipe(
      map(response => {
        return response.Search;
      })
    );
  }

}

