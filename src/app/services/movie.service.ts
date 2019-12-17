
import { Injectable } from '@angular/core';
//import{Http, Response, Headers, RequestOptions} from '@angular/http';
import { observable, of } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { Movie } from '../models/Movie';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

 
 
private baseurl:string='http://localhost:8090/biblio';
  constructor(private http:HttpClient) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }

  getmovies()
  {
    return this.http.get<Movie[]>(this.baseurl+'/Movies').pipe(catchError(err=>{console.error('An error occurred', err);
  return of(null);})) ;
  }

  getmovie(id:number)
  {
    return this.http.get<Movie>(this.baseurl+'/Movie/show/'+id).pipe(catchError(err=>{console.error('An error occurred', err);
    return of(null);})) ; ; 
  }

  createmovie(movie : Movie)
  { 
    console.log(movie)
    return this.http.post<Movie>(this.baseurl+'/Movie/new',movie).pipe(catchError(err=>{console.error('An error occurred', err);
    return of(null);})) ; ;
  }

  deletemovie(id:number)
  {
    return this.http.delete(this.baseurl+'/Movie/delete/'+id).pipe(catchError(err=>{console.error('An error occurred', err);
    return of(null);})) ;;
  }

  updatemovie(movie : Movie)
  {
    return this.http.put<Movie>(this.baseurl+'/Movie/update',movie).pipe(catchError(err=>{console.error('An error occurred', err);
    return of(null);})) ;;
  }

}
