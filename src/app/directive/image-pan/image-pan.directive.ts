import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appImagePanDirective]',
})
export class ImagePanDirective {
  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private startTranslateX = 0;
  private startTranslateY = 0;
  private currentX = 0;
  private currentY = 0;

  // Límites máximos de desplazamiento (se calculan al iniciar el arrastre)
  private maxTranslateX = 0;
  private maxTranslateY = 0;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    // El contenedor debe tener overflow: hidden
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if (event.button !== 0) return;
    event.preventDefault();
    this.startDrag(event.clientX, event.clientY);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    event.preventDefault();
    const touch = event.touches[0];
    this.startDrag(touch.clientX, touch.clientY);
  }

  private startDrag(clientX: number, clientY: number): void {
    this.isDragging = true;
    this.startX = clientX;
    this.startY = clientY;

    // Guardamos la posición actual de la imagen
    const img = this.el.nativeElement.querySelector('img');
    if (!img) return;

    const style = window.getComputedStyle(img);
    const matrix = new DOMMatrix(style.transform);
    this.startTranslateX = matrix.e;
    this.startTranslateY = matrix.f;

    // Calculamos los límites de movimiento
    this.calculateBounds(img);

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('touchmove', this.onTouchMove, { passive: false });
    document.addEventListener('touchend', this.onTouchEnd);
  }

  private calculateBounds(img: HTMLElement): void {
    const containerRect = this.el.nativeElement.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();

    // Cuánto puede moverse la imagen sin dejar espacios vacíos
    this.maxTranslateX = imgRect.width - containerRect.width;
    this.maxTranslateY = imgRect.height - containerRect.height;

    // Si la imagen es más chica que el contenedor, no se puede mover
    if (this.maxTranslateX < 0) this.maxTranslateX = 0;
    if (this.maxTranslateY < 0) this.maxTranslateY = 0;
  }

  private onMouseMove = (event: MouseEvent): void => {
    if (!this.isDragging) return;
    event.preventDefault();
    this.moveImage(event.clientX, event.clientY);
  };

  private onTouchMove = (event: TouchEvent): void => {
    if (!this.isDragging) return;
    event.preventDefault();
    const touch = event.touches[0];
    this.moveImage(touch.clientX, touch.clientY);
  };

  private moveImage(clientX: number, clientY: number): void {
    const deltaX = clientX - this.startX;
    const deltaY = clientY - this.startY;

    let newX = this.startTranslateX + deltaX;
    let newY = this.startTranslateY + deltaY;

    // Restringir para que no se salga de los bordes
    // (recordá que translate mueve la imagen en sentido opuesto al arrastre)
    newX = Math.min(0, Math.max(-this.maxTranslateX, newX));
    newY = Math.min(0, Math.max(-this.maxTranslateY, newY));

    this.currentX = newX;
    this.currentY = newY;

    const img = this.el.nativeElement.querySelector('img');
    if (img) {
      this.renderer.setStyle(img, 'transform', `translate(${newX}px, ${newY}px)`);
    }
  }

  private onMouseUp = (): void => {
    this.cleanup();
  };

  private onTouchEnd = (): void => {
    this.cleanup();
  };

  private cleanup(): void {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
  }
}
