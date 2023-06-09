import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipernewsItemComponent } from './swipernews-item.component';

describe('SwipernewsItemComponent', () => {
  let component: SwipernewsItemComponent;
  let fixture: ComponentFixture<SwipernewsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SwipernewsItemComponent]
    });
    fixture = TestBed.createComponent(SwipernewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
