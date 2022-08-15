import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDelteComponent } from './search-delte.component';

describe('SearchDelteComponent', () => {
  let component: SearchDelteComponent;
  let fixture: ComponentFixture<SearchDelteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDelteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDelteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
