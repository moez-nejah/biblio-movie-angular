import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

movie : Movie; 
movieForm: FormGroup;

constructor(private route: ActivatedRoute , private formBuilder: FormBuilder, private movieService: MovieService, 
   private router: Router) { }
    

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.movieService.getmovie(+id).subscribe((movie)=>{
      if(id==0)
      {
        this.router.navigate(['/home'])
      }
     this.movie = movie ; 
      
     this.initForm(this.movie);    
    
    },(error)=>{
      console.log('non ');
   
    })
   

  }

  initForm(movie) {
    this.movieForm = this.formBuilder.group({
      title: [movie.title, Validators.required],
      realisateur: [movie.realisateur, Validators.required],
      releaseDate: [movie.releaseDate, Validators.required],
      type: [movie.type, Validators.required],
    });
  }

  onSaveMovie() {


        // recuperation des valeur du formulaire
        const title = this.movieForm.get('title').value;
        const realisateur = this.movieForm.get('realisateur').value;
        const releaseDate = this.movieForm.get('releaseDate').value;
        const type = this.movieForm.get('type').value;
        

        const id = this.route.snapshot.params['id'];
        const newMovie = new Movie(title,realisateur,releaseDate,type );
        newMovie.id=id ; 
    // recuperation d'un movie
    

      this.movieService.updatemovie(newMovie).subscribe((movie)=>{
  
        this.router.navigate(['/movies']);

      },(error)=>{
        console.log(error);
      })   
  
   
   }



}
