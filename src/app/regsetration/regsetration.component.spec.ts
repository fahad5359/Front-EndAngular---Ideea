import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsetrationComponent } from './regsetration.component';

describe('RegsetrationComponent', () => {
  let component: RegsetrationComponent;
  let fixture: ComponentFixture<RegsetrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegsetrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegsetrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
