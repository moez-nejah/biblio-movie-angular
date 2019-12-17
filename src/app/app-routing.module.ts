import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { AjoutMovieComponent } from './components/movies/ajout-movie/ajout-movie.component';
import { UpdateMovieComponent } from './components/movies/update-movie/update-movie.component';


const routes: Routes = [
  {
      path: 'movies',
      component: MoviesComponent
  },
  {
    path: 'movie/ajout',
    component: AjoutMovieComponent
  },
  {
    path: 'update/movie/:id',
    component: UpdateMovieComponent
  },
  {
    path: '',
    component: HomeComponent
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
