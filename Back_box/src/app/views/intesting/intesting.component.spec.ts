import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntestingComponent } from './intesting.component';

describe('IntestingComponent', () => {
  let component: IntestingComponent;
  let fixture: ComponentFixture<IntestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
