import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExperienciaInterface } from '../../../interfaces/experiencia/experiencia.interface';
import { ImageCarousel } from '../../shared/image-carousel/image-carousel';

@Component({
  selector: 'app-exp-prof',
  imports: [RouterLink, ImageCarousel],
  templateUrl: './exp-prof.html',
  styleUrl: './exp-prof.css',
})
export class ExpProf {
  readonly mostrarBotonVerTodo = input<boolean>(true);

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
      imagenes: [
        { type: 'image', src: '../../assets/images/cv_photo1.png', alt: 'Captura de pantalla del sistema de taquilla digital para museos', slide: { titulo: 'Sistema de taquilla digital para museos', descripcion: 'Captura de pantalla del sistema de taquilla digital para museos' } },
        {  type: 'youtube', src: "https://www.youtube.com/embed/Af6i6ChAVTw" , poster: '/images/proyectos/museos-video-poster.png' },
        { type: 'pdf', src: '../../assets/doc/CV-Brandon Enrique Hernandez Martinez_fotografía.pdf' },
      ],
    },
    {
      periodo: '2025',
      puesto: 'Simulador Anatómico Interactivo 3D',
      empresa: 'Herramienta educativa de apoyo para la Licenciatura en Terapia Física',
      descripcion: [
        'Modelado y animación 3D de mano y antebrazo con reconocimiento de gestos mediante visión por computadora y replicación en tiempo real.',
      ],
      tecnologias: ['Python', 'Unity', 'Blender', 'MediaPipe', 'UDP', 'C#'],
      imagenes: [
        { type: 'image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk04CHNKFVU-2dF1BlNsqUqeEkIRzsm-x8YXci4UFm8Q&s=10' },
        { type: 'video', src: '/videos/proyectos/museos-demo.mp4', poster: '/images/proyectos/museos-video-poster.png' },
        { type: 'pdf', src: '/documentos/museos-reporte.pdf' },
      ],
    },
    // agrega más empleos aquí
  ];
}