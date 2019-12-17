import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMovieComponent } from './ajout-movie.component';

describe('AjoutMovieComponent', () => {
  let component: AjoutMovieComponent;
  let fixture: ComponentFixture<AjoutMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
