import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipercategorieComponent } from './swipercategorie.component';

describe('SwipercategorieComponent', () => {
  let component: SwipercategorieComponent;
  let fixture: ComponentFixture<SwipercategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SwipercategorieComponent]
    });
    fixture = TestBed.createComponent(SwipercategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
