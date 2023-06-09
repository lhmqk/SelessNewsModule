import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistrecitemComponent } from './newslistrecitem.component';

describe('NewslistrecitemComponent', () => {
  let component: NewslistrecitemComponent;
  let fixture: ComponentFixture<NewslistrecitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewslistrecitemComponent]
    });
    fixture = TestBed.createComponent(NewslistrecitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
