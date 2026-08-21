import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduAprComIdio } from './edu-apr-com-idio';

describe('EduAprComIdio', () => {
  let component: EduAprComIdio;
  let fixture: ComponentFixture<EduAprComIdio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduAprComIdio],
    }).compileComponents();

    fixture = TestBed.createComponent(EduAprComIdio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
