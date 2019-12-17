import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
//import { setTimeout } from 'timers';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  cols:any[];
 movie : Movie ; 
 public movies : Movie[];

  constructor(private router: Router  , private movieService : MovieService ) {
  
   }

  ngOnInit() {
 
    this.cols = [
      { field: 'title', header: 'Titre' },
      { field: 'realisateur', header: 'Réalisateur' },
      { field: 'releaseDate', header: 'Date de sortie' },
      { field: 'type', header: 'Type' }
  ];


     // setTimeout(()=> {console.log("khedmet")},9) ;
     

    this.movieService.getmovies().subscribe((movies)=>{
      this.movies=movies;
      
    //  console.log(movies) ;
    },(error)=>{
      console.log(error);
    })
    
  }


  DeleteMovie(id) {

    this.movieService.deletemovie(+id).subscribe((movie)=>{
     
      this.movieService.getmovies().subscribe((movies)=>{
        this.movies=movies;
        
        console.log(movies) ;
      },(error)=>{
        console.log(error);
      })

      this.router.navigate(['/movies']);
     
    },(error)=>{
     
   
    })
  }


  updateMovie(movie : Movie) {
    this.movie = movie ; 
    this.router.navigate(['/update/movie/'+movie.id]);
  }

}