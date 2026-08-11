import { Component, input, signal, computed, inject, effect, HostListener, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MediaInterface } from '../../../interfaces/media/media.interface';

declare const YT: any;

let youtubeApiReady: Promise<void> | null = null;

function cargarYoutubeApi(): Promise<void> {
  if (youtubeApiReady) return youtubeApiReady;

  youtubeApiReady = new Promise((resolve) => {
    if ((window as any).YT?.Player) {
      resolve();
      return;
    }
    const previo = (window as any).onYouTubeIframeAPIReady;
    (window as any).onYouTubeIframeAPIReady = () => {
      previo?.();
      resolve();
    };
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  });

  return youtubeApiReady;
}

const VOLUMEN_POR_DEFECTO = 2; // escala 0-100, solo YouTube

@Component({
  selector: 'app-image-carousel',
  imports: [],
  templateUrl: './image-carousel.html',
})
export class ImageCarousel {
  readonly items = input.required<MediaInterface[]>();
  readonly alt = input<string>('');

  private readonly sanitizer = inject(DomSanitizer);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly youtubePlayers = new Map<number, any>();

  protected readonly current = signal(0);
  protected readonly hasMultiple = computed(() => this.items().length > 1);
  protected readonly activeItem = computed(() => this.items()[this.current()]);

  protected readonly lightboxOpen = signal(false);
  protected readonly zoom = signal(1);
  protected readonly zoomPercent = computed(() => Math.round(this.zoom() * 100));

  constructor() {
    // Arma TODOS los reproductores de YouTube apenas se pinta el carrusel,
    // no hasta que el usuario llega a ese slide -> sin retraso al navegar.
    afterNextRender(() => {
      this.items().forEach((item, i) => {
        if (item.type === 'youtube') {
          this.crearYoutubePlayer(i, this.youtubeId(item.src, i));
        }
      });
    });

    effect(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      const activo = this.current();
      this.items().forEach((item, i) => {
        if (item.type === 'video') {
          this.syncVideo(i, i === activo);
        } else if (item.type === 'youtube') {
          this.syncYoutube(i, i === activo);
        }
      });
    });
  }

  next(): void {
    this.current.update(i => (i + 1) % this.items().length);
  }
  prev(): void {
    this.current.update(i => (i - 1 + this.items().length) % this.items().length);
  }
  goTo(i: number): void {
    this.current.set(i);
  }

  openLightbox(): void {
    this.zoom.set(1);
    this.lightboxOpen.set(true);
  }
  closeLightbox(): void {
    this.lightboxOpen.set(false);
  }
  zoomIn(): void {
    this.zoom.update(z => Math.min(z + 0.25, 3));
  }
  zoomOut(): void {
    this.zoom.update(z => Math.max(z - 0.25, 1));
  }

  protected safeUrl(src: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.conJsApi(src));
  }

  protected setDefaultVolume(event: Event): void {
    (event.target as HTMLVideoElement).volume = 0.25;
  }

  protected videoId(i: number): string {
    return `media-video-${i}`;
  }

  protected youtubeId(src: string, i: number): string {
    const videoId = src.split('/').pop()?.split('?')[0] ?? String(i);
    return `yt-${videoId}-${i}`;
  }

  protected youtubeIdLightbox(): string {
    return `yt-lightbox-${this.youtubeId(this.activeItem().src, this.current())}`;
  }

  private conJsApi(src: string): string {
    return src.includes('enablejsapi') ? src : `${src}${src.includes('?') ? '&' : '?'}enablejsapi=1`;
  }

  private crearYoutubePlayer(i: number, iframeId: string): void {
    cargarYoutubeApi().then(() => {
      if (!document.getElementById(iframeId)) return;
      new YT.Player(iframeId, {
        events: {
          onReady: (event: any) => {
            this.youtubePlayers.set(i, event.target);
            event.target.setVolume(VOLUMEN_POR_DEFECTO);
            this.syncYoutube(i, i === this.current());
          },
        },
      });
    });
  }

  private syncVideo(i: number, activo: boolean): void {
    const video = document.getElementById(this.videoId(i)) as HTMLVideoElement | null;
    if (!video) return;
    if (activo) {
      video.muted = false;
      video.play().catch(() => {});
    } else {
      video.pause();
      video.muted = true;
    }
  }

  private syncYoutube(i: number, activo: boolean): void {
    const player = this.youtubePlayers.get(i);
    if (!player) return; // todavía no está listo (raro, pero por si acaso)
    if (activo) {
      player.unMute();
      player.playVideo();
    } else {
      player.pauseVideo();
      player.mute();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeLightbox();
  }
}