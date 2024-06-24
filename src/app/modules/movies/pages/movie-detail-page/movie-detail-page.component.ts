import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@core/movies.model';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {
  movie!: MovieModel;

  constructor() { }

  ngOnInit(): void {
  }

}
