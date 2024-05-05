import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsRatingComponent } from './stars-rating.component';

fdescribe('StarsRatingComponent', () => {
  let component: StarsRatingComponent;
  let fixture: ComponentFixture<StarsRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarsRatingComponent],
    });
    fixture = TestBed.createComponent(StarsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //. Test Input() rating
  it('should have the correct rating value', () => {
    component.rating = 3.5;
    expect(component.rating).toEqual(3.5);
  });
  it('should handle minimum rating value', () => {
    component.rating = 0;
    expect(component.rating).toEqual(0);
  });
  it('should handle maximum rating value', () => {
    component.rating = 5;
    expect(component.rating).toEqual(5);
  });
  it('should not allow invalid rating values positive', () => {
    component.rating = 6;
    expect(component.rating).toBeLessThanOrEqual(5);
  });
  it('should not allow invalid rating values negative', () => {
    component.rating = -1;
    expect(component.rating).toBeGreaterThanOrEqual(0);
  });

  //. Test hasHalStar()
  it('should return true if has decimal', () => {
    expect(component.hasHalfStar(3.5)).toBeTrue();
  });
  it('should return false if has not decimal', () => {
    expect(component.hasHalfStar(3)).toBeFalse();
  });

  //. Test getStarList()
  it('should show correct star icons', () => {
    expect(component.getStarList(3)).toEqual([
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-fill',
      'bi-star',
      'bi-star',
    ]);
  });
  it('should show correct star icons with half stars < 0.5', () => {
    expect(component.getStarList(3.2)).toEqual([
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-half',
      'bi-star',
    ]);
  });
  it('should show correct star icons with half stars > 0.5', () => {
    expect(component.getStarList(3.7)).toEqual([
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-half',
      'bi-star',
    ]);
  });
  it('should show all stars empty', () => {
    expect(component.getStarList(0)).toEqual([
      'bi-star',
      'bi-star',
      'bi-star',
      'bi-star',
      'bi-star',
    ]);
  });
  it('should show all stars fill', () => {
    expect(component.getStarList(5)).toEqual([
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-fill',
    ]);
  });

  it('should return array of lenght five', () => {
    const testRatings = [0, 1.5, 2.5, 3, 4.5, 5];
    testRatings.forEach((rating) => {
      const result = component.getStarList(rating);
      expect(result.length).toBe(5);
    });
  });

  //. Test function getStarsColor( )
  it('should return color red for rating < 3', () => {
    expect(component.getStarsColor(2.9)).toBe('red');
  });
  it('should return color orange for ratings >= 3 and < 4', () => {
    expect(component.getStarsColor(3.5)).toBe('orange');
  });
  it('should return color green for ratings >= 4', () => {
    expect(component.getStarsColor(4)).toBe('green');
  });

  //. Test function changeRating()
  it('should update rating from component', () => {
    const newRating = 3;
    component.changeRating(newRating);
    expect(component.rating).toBe(newRating);
  });
});
