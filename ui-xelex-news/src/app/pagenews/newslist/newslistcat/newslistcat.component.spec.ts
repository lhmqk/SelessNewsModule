import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistcatComponent } from './newslistcat.component';

describe('NewslistcatComponent', () => {
  let component: NewslistcatComponent;
  let fixture: ComponentFixture<NewslistcatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewslistcatComponent]
    });
    fixture = TestBed.createComponent(NewslistcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
