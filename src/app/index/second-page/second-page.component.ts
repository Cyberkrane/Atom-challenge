import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, debounceTime, distinct, filter, fromEvent, map, switchMap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit, OnDestroy{

  movies:Movie[] = [];
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput!: ElementRef
  movieSuscription!: Subscription
  displayedColumns: Array<keyof Movie> = ['Poster', 'Title', 'Type', 'Year'];
  arrow: string = '▲';
  
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

columnSorting: { [key: string]: string } = {};


onSort(header: keyof Movie) {
  if (this.movies.length == 0) return;

  const currentSort = this.columnSorting[header];

  const newSort = currentSort === 'asc' ? 'desc' : 'asc';

  this.columnSorting[header] = newSort;

  this.movies.sort((a, b) => {
      if (a[header] < b[header]) {
          return newSort === 'asc' ? -1 : 1;
      } else if (a[header] > b[header]) {
          return newSort === 'asc' ? 1 : -1;
      } else {
          return 0;
      }
  });
}


}
