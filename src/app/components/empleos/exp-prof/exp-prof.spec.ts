import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpProf } from './exp-prof';

describe('ExpProf', () => {
  let component: ExpProf;
  let fixture: ComponentFixture<ExpProf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpProf],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpProf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
