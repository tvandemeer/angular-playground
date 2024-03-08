import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPicturesComponent } from './random-pictures.component';

describe('RandomPicturesComponent', () => {
  let component: RandomPicturesComponent;
  let fixture: ComponentFixture<RandomPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomPicturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
