import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistcatItemComponent } from './newslistcat-item.component';

describe('NewslistcatItemComponent', () => {
  let component: NewslistcatItemComponent;
  let fixture: ComponentFixture<NewslistcatItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewslistcatItemComponent]
    });
    fixture = TestBed.createComponent(NewslistcatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
