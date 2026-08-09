import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { TecnologiasInterface } from '../../../interfaces/tecnologias/tecnologias.interface'
@Component({
  selector: 'app-tech-carousel',
  imports: [],
  templateUrl: './tech-carousel.html',
  styleUrl: './tech-carousel.css',
})
export class TechCarousel {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly items = input.required<TecnologiasInterface[]>();

  protected readonly showAll = signal(false);
  private readonly carouselRef = viewChild<ElementRef<HTMLDivElement>>('carousel');

  toggleShowAll(): void {
    this.showAll.update(v => !v);
  }

  scroll(direction: 'left' | 'right'): void {
    const el = this.carouselRef()?.nativeElement;
    if (!el) return;
    const distancia = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'left' ? -distancia : distancia, behavior: 'smooth' });
  }
}