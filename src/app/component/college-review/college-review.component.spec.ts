import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeReviewComponent } from './college-review.component';

describe('CollegeReviewComponent', () => {
  let component: CollegeReviewComponent;
  let fixture: ComponentFixture<CollegeReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
