import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeIdeeaComponent } from './make-ideea.component';

describe('MakeIdeeaComponent', () => {
  let component: MakeIdeeaComponent;
  let fixture: ComponentFixture<MakeIdeeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeIdeeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeIdeeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
