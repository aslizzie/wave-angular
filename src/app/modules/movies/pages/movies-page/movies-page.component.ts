import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/movies.json'
import { MovieModel } from '@core/movies.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  mockMoviesList:Array<MovieModel> = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default;
    this.mockMoviesList = data;
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/movies', id]);
  }
}
