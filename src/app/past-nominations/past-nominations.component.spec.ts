import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastNominationsComponent } from './past-nominations.component';

describe('PastNominationsComponent', () => {
  let component: PastNominationsComponent;
  let fixture: ComponentFixture<PastNominationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastNominationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastNominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
