import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

movie : Movie; 
DATE: Date;
title: FormControl;
realisateur: FormControl;
releaseDate: FormControl;
movieType: FormControl;
myForm: FormGroup;
id: number;

constructor(private route: ActivatedRoute , private formBuilder: FormBuilder, private movieService: MovieService,private datePipe:DatePipe,
   private router: Router) {
     this.id = this.route.snapshot.params['id'];
    }
    

  ngOnInit() {

    this.createForm();
    this.getMovie(+this.id);

  }

  createForm(): FormGroup {
    this.title = new FormControl('', Validators.required);
    this.realisateur = new FormControl('', Validators.required);
    this.releaseDate = new FormControl('', Validators.required);
    this.movieType = new FormControl('', Validators.required);
    return this.myForm = this.formBuilder.group({
      title: this.title,
      realisateur: this.realisateur,
      releaseDate: this.releaseDate,
      movieType: this.movieType
    });
  }

  getMovie(id: number) {
    this.movieService.getmovie(+id).subscribe((movie)=>{
     this.title.setValue(movie.title);
     this.realisateur.setValue(movie.realisateur);   
     this.releaseDate.setValue(this.datePipe.transform(movie.releaseDate, 'yyyy-MM-dd'));
     this.movieType.setValue(movie.type);
    },(error)=>{
      console.log('non ');
   
    })
  }

  
  onSaveMovie() {

        // recuperation des valeur du formulaire
        const title = this.myForm.get('title').value;
        const realisateur = this.myForm.get('realisateur').value;
        const releaseDate = this.datePipe.transform(this.myForm.get('releaseDate').value, 'MM-dd-yyyy');
        const type = this.myForm.get('movieType').value;
        

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


fromJsonDate(jDate): string {
    const bDate: Date = new Date(jDate);
    return bDate.toISOString().substring(0, 10);  //Ignore time
  }

}
