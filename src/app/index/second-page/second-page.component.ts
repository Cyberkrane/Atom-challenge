import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, debounceTime, distinct, filter, fromEvent, map, switchMap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {

  movies:Movie[] = [];
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput!: ElementRef
  movieSuscription!: Subscription
  displayedColumns: string[] = ['Title', 'Type', 'Year', 'Poster', 'imdbID'];
  
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movieSuscription = fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup').pipe(
       map((event: Event) => {
         const searchTerm = (event.target as HTMLInputElement).value;
         return searchTerm
       }),
       filter((searchTerm: string) => searchTerm.length > 3),
       debounceTime(500),
       distinct(),
       switchMap((searchTerm: string) => this.moviesService.getMovies(searchTerm) )
       ).subscribe((movies: Movie[]) => {
         this.movies = movies !== undefined ? movies : [];
       })
   }

   
  ngOnDestroy(): void {
    this.movieSuscription.unsubscribe()
  }
}

