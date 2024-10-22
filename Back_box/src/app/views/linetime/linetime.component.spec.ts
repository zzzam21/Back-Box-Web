import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinetimeComponent } from './linetime.component';

describe('LinetimeComponent', () => {
  let component: LinetimeComponent;
  let fixture: ComponentFixture<LinetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinetimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
