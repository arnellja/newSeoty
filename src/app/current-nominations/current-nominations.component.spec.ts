import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentNominationsComponent } from './current-nominations.component';

describe('CurrentNominationsComponent', () => {
  let component: CurrentNominationsComponent;
  let fixture: ComponentFixture<CurrentNominationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentNominationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentNominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
