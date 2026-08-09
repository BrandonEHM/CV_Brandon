import { Component, input, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExperienciaInterface } from '../../../interfaces/experiencia/experiencia.interface';

@Component({
  selector: 'app-exp-prof',
  imports: [RouterLink],
  templateUrl: './exp-prof.html',
  styleUrl: './exp-prof.css',
})
export class ExpProf {
  readonly mostrarBotonVerTodo = input<boolean>(true);

  constructor() {
    afterNextRender(() => {
    
    });
  }

  protected readonly experiencias: ExperienciaInterface[] = [
    {
      periodo: '2025 – 2026',
      puesto: 'Desarrollador Full-Stack — Servicio Social',
      empresa: 'COZCYT (Consejo Zacatecano de Ciencia y Tecnología e Innovación) – IZC (Instituto Zacatecano de Cultura)',
      descripcion: [
        'Desarrollo de sistema de taquilla digital para red de museos, con registro de visitantes, generación de tickets QR e integración de punto de venta.',
        'Módulo de informes estadísticos de ventas y afluencia.',
        'Sistema desplegado en múltiples museos de la capital y con cobertura mediática estatal.',
      ],
      tecnologias: ['Angular', 'TypeScript', 'Node.js', 'SQL', 'Swagger', 'TailwindCSS', 'Flowbite'],
      imagenes: ['/images/proyectos/museos-dashboard.png'],
    },
    {
      periodo: '2025',
      puesto: 'Simulador Anatómico Interactivo 3D',
      empresa: 'Herramienta educativa de apoyo para la Licenciatura en Terapia Física',
      descripcion: [
        'Modelado y animación 3D de mano y antebrazo con reconocimiento de gestos mediante visión por computadora y replicación en tiempo real.',
      ],
      tecnologias: ['Python', 'Unity', 'Blender', 'MediaPipe', 'UDP', 'C#'],
      imagenes: ['/images/proyectos/simulador-3d.png'],
    },
    // agrega más empleos aquí
  ];
}