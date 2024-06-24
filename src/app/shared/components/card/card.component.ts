import { flatten } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieModel } from '@core/movies.model';
import { SerieModel } from '@core/series.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movie: MovieModel = {
      _id: '',
      name: '',
      description: '',
      duration: 0,
      cover_carrousel: '',
      cover_card: '',
      url: '',
      classification: '',
      favorite: false
  };

  @Input() serie: SerieModel = {
    _id: '',
    name: '',
    description: '',
    cover_carrousel: '',
    cover_card: '',
    url: '',
    favorite: false
};

  @Output() viewDetails = new EventEmitter<string>();

  goToMovieDetails(id: string): void {
    this.viewDetails.emit(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
