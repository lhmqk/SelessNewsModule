import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistcatBtComponent } from './newslistcat-bt.component';

describe('NewslistcatBtComponent', () => {
  let component: NewslistcatBtComponent;
  let fixture: ComponentFixture<NewslistcatBtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewslistcatBtComponent]
    });
    fixture = TestBed.createComponent(NewslistcatBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
