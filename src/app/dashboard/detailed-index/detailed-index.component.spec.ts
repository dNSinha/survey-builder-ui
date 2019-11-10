import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedIndexComponent } from './detailed-index.component';

describe('DetailedIndexComponent', () => {
  let component: DetailedIndexComponent;
  let fixture: ComponentFixture<DetailedIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
