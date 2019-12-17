
export class Movie {
  
  id : number ;
  title: string ;
  realisateur : string ; 
  releaseDate : string ;
  type : string ; 
  
  constructor(title,realisateur,releaseDate ,type )
  {
    this.title= title; 
    this.realisateur=realisateur; 
    this.releaseDate=releaseDate;
    this.type=type;
  }

 
}
