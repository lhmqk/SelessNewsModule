import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipernewsComponent } from './swipernews.component';

describe('SwipernewsComponent', () => {
  let component: SwipernewsComponent;
  let fixture: ComponentFixture<SwipernewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SwipernewsComponent]
    });
    fixture = TestBed.createComponent(SwipernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
