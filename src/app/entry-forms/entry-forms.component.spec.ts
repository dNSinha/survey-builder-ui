import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFormsComponent } from './entry-forms.component';

describe('EntryFormsComponent', () => {
  let component: EntryFormsComponent;
  let fixture: ComponentFixture<EntryFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
