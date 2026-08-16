import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDestacados } from './proyectos-destacados';

describe('ProyectosDestacados', () => {
  let component: ProyectosDestacados;
  let fixture: ComponentFixture<ProyectosDestacados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosDestacados],
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectosDestacados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
