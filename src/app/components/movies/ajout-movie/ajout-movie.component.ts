import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/Movie';
@Component({
  selector: 'app-ajout-movie',
  templateUrl: './ajout-movie.component.html',
  styleUrls: ['./ajout-movie.component.css']
})
export class AjoutMovieComponent implements OnInit {


  movie : Movie ; 
  movieForm: FormGroup;
  date : String ; 

  constructor(private formBuilder: FormBuilder,private router: Router  , private movieService : MovieService ) { }

  ngOnInit() {

      this.movieForm = this.formBuilder.group({
        title: ['', Validators.required],
        realisateur: [''],
        releaseDate: ['', Validators.required],
        type: ['', Validators.required],

      })

    }

    onSaveMovie() {

        // recuperation des valeur du formulaire
        const title = this.movieForm.get('title').value;
        const realisateur = this.movieForm.get('realisateur').value;
        const releaseDate = this.movieForm.get('releaseDate').value;
        const type = this.movieForm.get('type').value;

        const newMovie = new Movie(title,realisateur,releaseDate,type );
        
      // recuperation d'un user
      this.movieService.createmovie(newMovie).subscribe((movie22)=>{
       this.movie = movie22 ;
       this.router.navigate(['/movies'])
       
     },(error)=>{
       console.log(error);
     })
     
    }


}

