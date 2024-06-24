import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPageComponent,
    outlet: 'child'
  },
  { 
    path: 'movies/:id', 
    component: MovieDetailPageComponent,
    outlet: 'child'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
