import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aprendiendo } from './aprendiendo';

describe('Aprendiendo', () => {
  let component: Aprendiendo;
  let fixture: ComponentFixture<Aprendiendo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aprendiendo],
    }).compileComponents();

    fixture = TestBed.createComponent(Aprendiendo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
