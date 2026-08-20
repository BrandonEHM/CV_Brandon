import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProyectoInterface } from '../../interfaces/proyecto/proyecto.interface';
import { EduAprComIdio } from '../edu-apr-com-idio/edu-apr-com-idio';
@Component({
  selector: 'app-proyectos-destacados',
  imports: [RouterLink, EduAprComIdio],
  templateUrl: './proyectos-destacados.html',
  styleUrl: './proyectos-destacados.css',
})
export class ProyectosDestacados {
  protected readonly showAll = signal(false);
  private readonly carouselRef = viewChild<ElementRef<HTMLDivElement>>('carousel');

  protected readonly proyectos: ProyectoInterface[] = [
    {
      titulo: 'Sistema Integral de Museos',
      descripcion: 'Sistema de taquilla digital, tickets QR, ventas, reportes y punto de venta.',
      imagen: '/images/proyectos/museos-dashboard.png',
      tecnologias: ['Angular', 'Node.js', 'SQL', 'QR', 'POS'],
    },
    {
      titulo: 'Simulador Anatómico 3D',
      descripcion: 'Simulador interactivo con visión por computadora y modelos 3D.',
      imagen: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2021/11/29439-min.jpg',
      tecnologias: ['Python', 'Unity', 'Blender', 'MediaPipe'],
    },
    {
      titulo: 'Aplicaciones Móviles',
      descripcion: 'Desarrollo de aplicaciones móviles nativas con interfaces modernas.',
      imagen: '/images/proyectos/apps-moviles.png',
      tecnologias: ['Kotlin', 'Android', 'Firebase', 'REST'],
    },
    // agrega más proyectos aquí — el ranking "TOP N" se calcula solo por su posición en este arreglo
  
  
  ];

  toggleShowAll(): void {
    this.showAll.update(v => !v);
  }

  scroll(direction: 'left' | 'right'): void {
    const el = this.carouselRef()?.nativeElement;
    if (!el) return;
    const distancia = el.clientWidth * 0.9;
    el.scrollBy({ left: direction === 'left' ? -distancia : distancia, behavior: 'smooth' });
  }
}