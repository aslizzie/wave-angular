import { Component, OnInit } from '@angular/core';
import * as dataMoviesRaw from '../../../../data/movies.json';
import * as dataSeriesRaw from '../../../../data/series.json';
import { MovieModel } from '@core/movies.model';
import { SerieModel } from '@core/series.model';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  mockMoviesList:Array<MovieModel> = []
  mockSeriesList:Array<SerieModel> = []

  constructor() { }

  ngOnInit(): void {
    const dataMovies:any = (dataMoviesRaw as any).default;
    this.mockMoviesList = dataMovies;
    
    const dataSeries:any = (dataSeriesRaw as any).default;
    this.mockSeriesList = dataSeries;
  }

}
