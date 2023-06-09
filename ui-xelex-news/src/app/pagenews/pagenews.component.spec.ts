import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenewsComponent } from './pagenews.component';

describe('PagenewsComponent', () => {
  let component: PagenewsComponent;
  let fixture: ComponentFixture<PagenewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PagenewsComponent]
    });
    fixture = TestBed.createComponent(PagenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
