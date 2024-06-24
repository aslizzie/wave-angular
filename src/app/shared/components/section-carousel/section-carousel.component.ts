import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '@core/movies.model';
import { SerieModel } from '@core/series.model';

@Component({
  selector: 'app-section-carousel',
  templateUrl: './section-carousel.component.html',
  styleUrls: ['./section-carousel.component.css']
})
export class SectionCarouselComponent implements OnInit {
  @Input() title: string = ''
  @Input() dataMovies: Array<MovieModel> = []
  @Input() dataSeries: Array<SerieModel> = []

  constructor() { }

  ngOnInit(): void {
  }

}
