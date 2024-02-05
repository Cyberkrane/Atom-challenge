import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {


  displayedColumns: string[] = [
    'Title',
    'Type',
    'Year',
    'Poster',
    'imdbID'
  ];
  allMovies: Movie[] = [];
  movies: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(){
   this.moviesService.getMoviesA().subscribe((data) => {
     this.movies = data.body.Search;
     console.log(this.movies);

   })
  }

}

