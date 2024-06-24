import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '@core/movies.model';
import { SerieModel } from '@core/series.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = ''
  @Input() dataMovies: Array<MovieModel> = []
  @Input() dataSeries: Array<SerieModel> = []

  constructor() { }

  ngOnInit(): void {
  }

}
