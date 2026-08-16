import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosEmpleos } from './todos-empleos';

describe('TodosEmpleos', () => {
  let component: TodosEmpleos;
  let fixture: ComponentFixture<TodosEmpleos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosEmpleos],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosEmpleos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
