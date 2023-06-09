import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistrecComponent } from './newslistrec.component';

describe('NewslistrecComponent', () => {
  let component: NewslistrecComponent;
  let fixture: ComponentFixture<NewslistrecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewslistrecComponent]
    });
    fixture = TestBed.createComponent(NewslistrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
