import { Component, OnInit } from '@angular/core';
import * as dataMoviesRaw from '../../../../data/movies.json'
import * as dataSeriesRaw from '../../../../data/movies.json'
import { MovieModel } from '@core/movies.model';
import { SerieModel } from '@core/series.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isSidebarCollapsed: boolean = true;
  mockMoviesList:Array<MovieModel> = []
  mockSeriesList:Array<SerieModel> = []

  constructor() { }

  ngOnInit(): void {
    const {dataMovies}:any = (dataMoviesRaw as any).default;
    this.mockMoviesList = dataMovies;
    const {dataSeries}:any = (dataSeriesRaw as any).default;
    this.mockSeriesList = dataSeries;
  }

  onSidebarCollapsed(collapsed: boolean): void {
    this.isSidebarCollapsed = collapsed;
  }
}
