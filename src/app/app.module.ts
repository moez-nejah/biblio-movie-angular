import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { AjoutMovieComponent } from './components/movies/ajout-movie/ajout-movie.component';
import { UpdateMovieComponent } from './components/movies/update-movie/update-movie.component';
import { DataTablesModule } from 'angular-datatables';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    AjoutMovieComponent,
    UpdateMovieComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TableModule,
    CalendarModule,
    BrowserAnimationsModule,
    ButtonModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
